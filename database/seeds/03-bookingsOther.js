exports.seed = async function (knex) {
  await knex("bookings").del();
  await knex("bookings").insert([
    { date: "2023-06-02T00:00:00.000Z", officeId: 10, coworkerId: 1000 },
    { date: "2023-06-01T00:00:00.000Z", officeId: 10, coworkerId: 1000 },
    { date: "2023-06-05T00:00:00.000Z", officeId: 10, coworkerId: 1000 },
    { date: "2023-06-06T00:00:00.000Z", officeId: 11, coworkerId: 1000 },
    { date: "2023-06-13T00:00:00.000Z", officeId: 11, coworkerId: 1000 },
    { date: "2023-06-14T00:00:00.000Z", officeId: 10, coworkerId: 1000 },
    { date: "2023-06-15T00:00:00.000Z", officeId: 10, coworkerId: 1000 },
    { date: "2023-06-18T00:00:00.000Z", officeId: 10, coworkerId: 1000 },
    { date: "2023-06-19T00:00:00.000Z", officeId: 10, coworkerId: 1000 },
    { date: "2023-06-21T00:00:00.000Z", officeId: 10, coworkerId: 1000 },
    { date: "2023-06-02T00:00:00.000Z", officeId: 13, coworkerId: 1011 },
    { date: "2023-06-26T00:00:00.000Z", officeId: 13, coworkerId: 1011 },
    { date: "2023-06-27T00:00:00.000Z", officeId: 10, coworkerId: 1011 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1011 },
    { date: "2023-06-02T00:00:00.000Z", officeId: 10, coworkerId: 1011 },
    { date: "2023-06-01T00:00:00.000Z", officeId: 10, coworkerId: 1011 },
    { date: "2023-06-05T00:00:00.000Z", officeId: 10, coworkerId: 1011 },
    { date: "2023-06-06T00:00:00.000Z", officeId: 11, coworkerId: 1011 },
    { date: "2023-06-13T00:00:00.000Z", officeId: 11, coworkerId: 1011 },
    { date: "2023-06-14T00:00:00.000Z", officeId: 10, coworkerId: 1011 },
    { date: "2023-06-15T00:00:00.000Z", officeId: 10, coworkerId: 1011 },
    { date: "2023-06-18T00:00:00.000Z", officeId: 10, coworkerId: 1012 },
    { date: "2023-06-19T00:00:00.000Z", officeId: 10, coworkerId: 1012 },
    { date: "2023-06-21T00:00:00.000Z", officeId: 10, coworkerId: 1012 },
    { date: "2023-06-02T00:00:00.000Z", officeId: 13, coworkerId: 1012 },
    { date: "2023-06-26T00:00:00.000Z", officeId: 13, coworkerId: 1012 },
    { date: "2023-06-27T00:00:00.000Z", officeId: 16, coworkerId: 1012 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 16, coworkerId: 1012 },
    { date: "2023-06-02T00:00:00.000Z", officeId: 16, coworkerId: 1012 },
    { date: "2023-06-01T00:00:00.000Z", officeId: 16, coworkerId: 1012 },
    { date: "2023-06-05T00:00:00.000Z", officeId: 10, coworkerId: 1012 },
    { date: "2023-06-06T00:00:00.000Z", officeId: 11, coworkerId: 1012 },
    { date: "2023-06-13T00:00:00.000Z", officeId: 15, coworkerId: 1002 },
    { date: "2023-06-14T00:00:00.000Z", officeId: 17, coworkerId: 1002 },
    { date: "2023-06-15T00:00:00.000Z", officeId: 17, coworkerId: 1002 },
    { date: "2023-06-18T00:00:00.000Z", officeId: 10, coworkerId: 1002 },
    { date: "2023-06-19T00:00:00.000Z", officeId: 10, coworkerId: 1002 },
    { date: "2023-06-21T00:00:00.000Z", officeId: 10, coworkerId: 1002 },
    { date: "2023-06-02T00:00:00.000Z", officeId: 13, coworkerId: 1003 },
    { date: "2023-06-26T00:00:00.000Z", officeId: 13, coworkerId: 1003 },
    { date: "2023-06-27T00:00:00.000Z", officeId: 10, coworkerId: 1003 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1003 },
    { date: "2023-06-02T00:00:00.000Z", officeId: 10, coworkerId: 1003 },
    { date: "2023-06-01T00:00:00.000Z", officeId: 10, coworkerId: 1004 },
    { date: "2023-06-05T00:00:00.000Z", officeId: 10, coworkerId: 1004 },
    { date: "2023-06-06T00:00:00.000Z", officeId: 11, coworkerId: 1004 },
    { date: "2023-06-13T00:00:00.000Z", officeId: 11, coworkerId: 1004 },
    { date: "2023-06-14T00:00:00.000Z", officeId: 10, coworkerId: 1004 },
    { date: "2023-06-15T00:00:00.000Z", officeId: 10, coworkerId: 1004 },
    { date: "2023-06-18T00:00:00.000Z", officeId: 10, coworkerId: 1004 },
    { date: "2023-06-19T00:00:00.000Z", officeId: 10, coworkerId: 1004 },
    { date: "2023-06-21T00:00:00.000Z", officeId: 10, coworkerId: 1004 },
    { date: "2023-06-02T00:00:00.000Z", officeId: 13, coworkerId: 1004 },
    { date: "2023-06-26T00:00:00.000Z", officeId: 13, coworkerId: 1004 },
    { date: "2023-06-27T00:00:00.000Z", officeId: 10, coworkerId: 1005 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1005 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1005 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1005 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1005 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1005 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1005 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1005 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1005 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1005 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1006 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1006 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1006 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1006 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1006 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1006 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1007 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1007 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1007 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1007 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1007 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1007 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1007 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 17, coworkerId: 1007 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 17, coworkerId: 1007 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 17, coworkerId: 1008 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 17, coworkerId: 1008 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 17, coworkerId: 1008 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 17, coworkerId: 1008 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 17, coworkerId: 1008 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 13, coworkerId: 1008 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 13, coworkerId: 1008 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 13, coworkerId: 1008 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 13, coworkerId: 1008 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 13, coworkerId: 1009 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 13, coworkerId: 1009 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 13, coworkerId: 1009 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 13, coworkerId: 1009 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 13, coworkerId: 1009 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 13, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 13, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 15, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 15, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 15, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 15, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 15, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 15, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1002 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1002 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1002 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1002 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1002 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1002 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1002 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1002 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 14, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 14, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 14, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 14, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 14, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 14, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 14, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 14, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 14, coworkerId: 1010 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 14, coworkerId: 1001 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1001 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1001 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1001 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1001 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1001 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1001 },
    { date: "2023-06-29T00:00:00.000Z", officeId: 10, coworkerId: 1001 },
  ]);
};
