const { Schema, model } = require("mongoose");

const visitSchema = new Schema(
  {
    employeeId: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    clientId: { type: Schema.Types.ObjectId, ref: "Client", required: true },
    services: [
      {
        serviceId: {
          type: Schema.Types.ObjectId,
          ref: "Service",
          required: true,
        },
        name: String,
        price: Number,
        duration: Number,
      },
    ],
    date: { type: Date, required: true },
    time: { type: String, required: true },
    duration: { type: Number, required: true },
    note: { type: String },
    status: {
      type: String,
      enum: ["scheduled", "completed", "cancelled"],
      default: "scheduled",
    },
  },
  { versionKey: false }
);

module.exports = model("Visit", visitSchema);
