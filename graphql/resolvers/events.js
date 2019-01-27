const Event = require("../../models/event");
const User = require("../../models/user");
const Booking = require("../../models/booking");

const { transformEvent } = require("./merge");
const { dateToString } = require("../../utils/helpers/date");

module.exports = {
  events: async () => {
    try {
      const events = await Event.find().populate("creator");
      return events.map(event => {
        return transformEvent(event);
      });
    } catch (error) {
      throw error;
    }
  },
  createEvent: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }

    const event = new Event({
      title: args.eventInput.title,
      description: args.eventInput.description,
      price: parseFloat(args.eventInput.price),
      date: dateToString(args.eventInput.date),
      creator: req.userId
    });

    let createdEvent;

    try {
      const result = await event.save();

      createdEvent = transformEvent(result);

      const creator = await User.findById(req.userId);
      if (!creator) {
        throw new Error("User Not Found !");
      }

      creator.createdEvents.push(event);
      await creator.save();

      return createdEvent;
    } catch (error) {
      throw error;
    }
  },
  bookEvent: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }

    const fetchedEvent = await Event.findOne({ _id: args.eventId });
    const booking = new Booking({
      user: req.userId,
      event: fetchedEvent
    });
    const result = await booking.save();
    return transformBooking(result);
  }
};
