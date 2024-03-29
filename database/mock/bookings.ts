import IBooking from "../../typings/interfaces/IBooking";

const mockBookings: IBooking[] = [
  { date: "2023-09-02T12:00:00.000Z", officeId: 10, coworkerId: 1000 },
  { date: "2023-09-01T12:00:00.000Z", officeId: 10, coworkerId: 1000 },
  { date: "2023-09-05T12:00:00.000Z", officeId: 10, coworkerId: 1000 },
  { date: "2023-09-06T12:00:00.000Z", officeId: 11, coworkerId: 1000 },
  { date: "2023-09-13T12:00:00.000Z", officeId: 11, coworkerId: 1000 },
  { date: "2023-09-14T12:00:00.000Z", officeId: 10, coworkerId: 1000 },
  { date: "2023-09-15T12:00:00.000Z", officeId: 10, coworkerId: 1000 },
  { date: "2023-09-18T12:00:00.000Z", officeId: 10, coworkerId: 1000 },
  { date: "2023-09-19T12:00:00.000Z", officeId: 10, coworkerId: 1000 },
  { date: "2023-09-21T12:00:00.000Z", officeId: 10, coworkerId: 1000 },
  { date: "2023-09-02T12:00:00.000Z", officeId: 13, coworkerId: 1011 },
  { date: "2023-09-26T12:00:00.000Z", officeId: 13, coworkerId: 1011 },
  { date: "2023-09-27T12:00:00.000Z", officeId: 10, coworkerId: 1011 },
  { date: "2023-09-29T12:00:00.000Z", officeId: 10, coworkerId: 1011 },
  { date: "2023-09-02T12:00:00.000Z", officeId: 10, coworkerId: 1011 },
  { date: "2023-09-01T12:00:00.000Z", officeId: 10, coworkerId: 1011 },
  { date: "2023-09-05T12:00:00.000Z", officeId: 10, coworkerId: 1011 },
  { date: "2023-09-06T12:00:00.000Z", officeId: 11, coworkerId: 1011 },
  { date: "2023-09-13T12:00:00.000Z", officeId: 11, coworkerId: 1011 },
  { date: "2023-09-14T12:00:00.000Z", officeId: 10, coworkerId: 1011 },
  { date: "2023-09-15T12:00:00.000Z", officeId: 10, coworkerId: 1011 },
  { date: "2023-09-18T12:00:00.000Z", officeId: 10, coworkerId: 1012 },
  { date: "2023-09-19T12:00:00.000Z", officeId: 10, coworkerId: 1012 },
  { date: "2023-09-21T12:00:00.000Z", officeId: 10, coworkerId: 1012 },
  { date: "2023-09-02T12:00:00.000Z", officeId: 13, coworkerId: 1012 },
  { date: "2023-09-26T12:00:00.000Z", officeId: 13, coworkerId: 1012 },
  { date: "2023-09-27T12:00:00.000Z", officeId: 16, coworkerId: 1012 },
  { date: "2023-09-29T12:00:00.000Z", officeId: 16, coworkerId: 1012 },
  { date: "2023-09-02T12:00:00.000Z", officeId: 16, coworkerId: 1012 },
  { date: "2023-09-01T12:00:00.000Z", officeId: 16, coworkerId: 1012 },
  { date: "2023-09-05T12:00:00.000Z", officeId: 10, coworkerId: 1012 },
  { date: "2023-09-06T12:00:00.000Z", officeId: 11, coworkerId: 1012 },
  { date: "2023-09-13T12:00:00.000Z", officeId: 15, coworkerId: 1002 },
  { date: "2023-09-14T12:00:00.000Z", officeId: 17, coworkerId: 1002 },
  { date: "2023-09-15T12:00:00.000Z", officeId: 17, coworkerId: 1002 },
  { date: "2023-09-18T12:00:00.000Z", officeId: 10, coworkerId: 1002 },
  { date: "2023-09-19T12:00:00.000Z", officeId: 10, coworkerId: 1002 },
  { date: "2023-09-21T12:00:00.000Z", officeId: 10, coworkerId: 1002 },
  { date: "2023-09-02T12:00:00.000Z", officeId: 13, coworkerId: 1003 },
  { date: "2023-09-26T12:00:00.000Z", officeId: 13, coworkerId: 1003 },
  { date: "2023-09-27T12:00:00.000Z", officeId: 10, coworkerId: 1003 },
  { date: "2023-09-29T12:00:00.000Z", officeId: 10, coworkerId: 1003 },
  { date: "2023-09-02T12:00:00.000Z", officeId: 10, coworkerId: 1003 },
  { date: "2023-09-01T12:00:00.000Z", officeId: 10, coworkerId: 1004 },
  { date: "2023-09-05T12:00:00.000Z", officeId: 10, coworkerId: 1004 },
  { date: "2023-09-06T12:00:00.000Z", officeId: 11, coworkerId: 1004 },
  { date: "2023-09-13T12:00:00.000Z", officeId: 11, coworkerId: 1004 },
  { date: "2023-09-14T12:00:00.000Z", officeId: 10, coworkerId: 1004 },
  { date: "2023-09-15T12:00:00.000Z", officeId: 10, coworkerId: 1004 },
  { date: "2023-09-18T12:00:00.000Z", officeId: 10, coworkerId: 1004 },
  { date: "2023-09-19T12:00:00.000Z", officeId: 10, coworkerId: 1004 },
  { date: "2023-09-21T12:00:00.000Z", officeId: 10, coworkerId: 1004 },
  { date: "2023-09-02T12:00:00.000Z", officeId: 13, coworkerId: 1004 },
  { date: "2023-09-26T12:00:00.000Z", officeId: 13, coworkerId: 1004 },
  { date: "2023-09-27T12:00:00.000Z", officeId: 10, coworkerId: 1005 },
  { date: "2023-09-29T12:00:00.000Z", officeId: 10, coworkerId: 1005 },
  { date: "2023-09-23T12:00:00.000Z", officeId: 10, coworkerId: 1005 },
  { date: "2023-09-23T12:00:00.000Z", officeId: 10, coworkerId: 1005 },
  { date: "2023-09-25T12:00:00.000Z", officeId: 10, coworkerId: 1005 },
  { date: "2023-09-26T12:00:00.000Z", officeId: 10, coworkerId: 1005 },
  { date: "2023-09-27T12:00:00.000Z", officeId: 10, coworkerId: 1005 },
  { date: "2023-09-28T12:00:00.000Z", officeId: 10, coworkerId: 1005 },
  { date: "2023-09-12T12:00:00.000Z", officeId: 10, coworkerId: 1005 },
  { date: "2023-09-12T12:00:00.000Z", officeId: 10, coworkerId: 1005 },
  { date: "2023-09-23T12:00:00.000Z", officeId: 10, coworkerId: 1006 },
  { date: "2023-09-11T12:00:00.000Z", officeId: 10, coworkerId: 1006 },
  { date: "2023-09-14T12:00:00.000Z", officeId: 10, coworkerId: 1006 },
  { date: "2023-09-16T12:00:00.000Z", officeId: 10, coworkerId: 1006 },
  { date: "2023-09-18T12:00:00.000Z", officeId: 10, coworkerId: 1006 },
  { date: "2023-09-19T12:00:00.000Z", officeId: 10, coworkerId: 1006 },
  { date: "2023-09-29T12:00:00.000Z", officeId: 10, coworkerId: 1007 },
  { date: "2023-09-03T12:00:00.000Z", officeId: 10, coworkerId: 1007 },
  { date: "2023-09-02T12:00:00.000Z", officeId: 10, coworkerId: 1007 },
  { date: "2023-09-06T12:00:00.000Z", officeId: 10, coworkerId: 1007 },
  { date: "2023-09-05T12:00:00.000Z", officeId: 10, coworkerId: 1007 },
  { date: "2023-09-03T12:00:00.000Z", officeId: 10, coworkerId: 1007 },
  { date: "2023-09-04T12:00:00.000Z", officeId: 10, coworkerId: 1007 },
  { date: "2023-09-02T12:00:00.000Z", officeId: 17, coworkerId: 1007 },
  { date: "2023-09-23T12:00:00.000Z", officeId: 17, coworkerId: 1007 },
  { date: "2023-09-28T12:00:00.000Z", officeId: 17, coworkerId: 1008 },
  { date: "2023-09-30T12:00:00.000Z", officeId: 17, coworkerId: 1008 },
  { date: "2023-09-12T12:00:00.000Z", officeId: 17, coworkerId: 1008 },
  { date: "2023-09-10T12:00:00.000Z", officeId: 17, coworkerId: 1008 },
  { date: "2023-09-06T12:00:00.000Z", officeId: 17, coworkerId: 1008 },
  { date: "2023-09-08T12:00:00.000Z", officeId: 13, coworkerId: 1008 },
  { date: "2023-09-09T12:00:00.000Z", officeId: 13, coworkerId: 1008 },
  { date: "2023-09-11T12:00:00.000Z", officeId: 13, coworkerId: 1008 },
  { date: "2023-09-16T12:00:00.000Z", officeId: 13, coworkerId: 1008 },
  { date: "2023-09-13T12:00:00.000Z", officeId: 12, coworkerId: 1009 },
  { date: "2023-09-04T12:00:00.000Z", officeId: 12, coworkerId: 1009 },
  { date: "2023-09-12T12:00:00.000Z", officeId: 12, coworkerId: 1009 },
  { date: "2023-09-18T12:00:00.000Z", officeId: 12, coworkerId: 1009 },
  { date: "2023-09-16T12:00:00.000Z", officeId: 13, coworkerId: 1009 },
  { date: "2023-09-12T12:00:00.000Z", officeId: 13, coworkerId: 1010 },
  { date: "2023-09-06T12:00:00.000Z", officeId: 13, coworkerId: 1010 },
  { date: "2023-09-15T12:00:00.000Z", officeId: 10, coworkerId: 1010 },
  { date: "2023-09-12T12:00:00.000Z", officeId: 10, coworkerId: 1010 },
  { date: "2023-09-23T12:00:00.000Z", officeId: 10, coworkerId: 1010 },
  { date: "2023-09-12T12:00:00.000Z", officeId: 10, coworkerId: 1010 },
  { date: "2023-09-06T12:00:00.000Z", officeId: 10, coworkerId: 1010 },
  { date: "2023-09-04T12:00:00.000Z", officeId: 15, coworkerId: 1010 },
  { date: "2023-09-01T12:00:00.000Z", officeId: 15, coworkerId: 1010 },
  { date: "2023-09-23T12:00:00.000Z", officeId: 15, coworkerId: 1010 },
  { date: "2023-09-26T12:00:00.000Z", officeId: 15, coworkerId: 1010 },
  { date: "2023-09-28T12:00:00.000Z", officeId: 15, coworkerId: 1010 },
  { date: "2023-09-04T12:00:00.000Z", officeId: 15, coworkerId: 1010 },
  { date: "2023-09-16T12:00:00.000Z", officeId: 10, coworkerId: 1010 },
  { date: "2023-09-17T12:00:00.000Z", officeId: 10, coworkerId: 1002 },
  { date: "2023-09-18T12:00:00.000Z", officeId: 10, coworkerId: 1002 },
  { date: "2023-09-19T12:00:00.000Z", officeId: 10, coworkerId: 1002 },
  { date: "2023-09-20T12:00:00.000Z", officeId: 10, coworkerId: 1002 },
  { date: "2023-09-10T12:00:00.000Z", officeId: 10, coworkerId: 1002 },
  { date: "2023-09-02T12:00:00.000Z", officeId: 10, coworkerId: 1002 },
  { date: "2023-09-17T12:00:00.000Z", officeId: 10, coworkerId: 1002 },
  { date: "2023-09-27T12:00:00.000Z", officeId: 10, coworkerId: 1002 },
  { date: "2023-09-24T12:00:00.000Z", officeId: 10, coworkerId: 1010 },
  { date: "2023-09-23T12:00:00.000Z", officeId: 10, coworkerId: 1010 },
  { date: "2023-09-22T12:00:00.000Z", officeId: 14, coworkerId: 1010 },
  { date: "2023-09-06T12:00:00.000Z", officeId: 14, coworkerId: 1010 },
  { date: "2023-09-23T12:00:00.000Z", officeId: 14, coworkerId: 1010 },
  { date: "2023-09-16T12:00:00.000Z", officeId: 14, coworkerId: 1010 },
  { date: "2023-09-27T12:00:00.000Z", officeId: 14, coworkerId: 1010 },
  { date: "2023-09-14T12:00:00.000Z", officeId: 14, coworkerId: 1010 },
  { date: "2023-09-17T12:00:00.000Z", officeId: 14, coworkerId: 1010 },
  { date: "2023-09-18T12:00:00.000Z", officeId: 14, coworkerId: 1010 },
  { date: "2023-09-22T12:00:00.000Z", officeId: 14, coworkerId: 1010 },
  { date: "2023-09-09T12:00:00.000Z", officeId: 14, coworkerId: 1001 },
  { date: "2023-09-12T12:00:00.000Z", officeId: 10, coworkerId: 1001 },
  { date: "2023-09-09T12:00:00.000Z", officeId: 10, coworkerId: 1001 },
  { date: "2023-09-10T12:00:00.000Z", officeId: 10, coworkerId: 1001 },
  { date: "2023-09-30T12:00:00.000Z", officeId: 10, coworkerId: 1001 },
  { date: "2023-09-22T12:00:00.000Z", officeId: 10, coworkerId: 1001 },
  { date: "2023-09-27T12:00:00.000Z", officeId: 10, coworkerId: 1001 },
  { date: "2023-09-26T12:00:00.000Z", officeId: 10, coworkerId: 1001 },
];

export default mockBookings;
