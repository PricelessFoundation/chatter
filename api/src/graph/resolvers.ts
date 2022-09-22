// @ts-nocheck
export const resolvers = {
  Query: {
    user: (_: any, { id }: any) => {
      return {
        id,
        name: "user",
        email: "a@gmail.com",
        channels: [],
      };
    },
  },

  Mutation: {},
  User: {
    channels: () => [
      {
        id: 1,
        name: "general",
        createdAt: "2020-01-01",
      },
    ],
  },
  Channel: {
    id: () => 1,
    members: () => [
      {
        id: 1,
        createdAt: "2020-01-01",
      },
      {
        id: 2,
        createdAt: "2020-01-01",
      },
    ],
  },
  ChannelMember: {
    id: () => 1,
    user: () => ({ id: 1, name: "John Doe" }),
  },
  Message: {
    sender: () => {
      return {
        id: 1,
        name: "John Doe",
      };
    },
    channel: () => {
      return {
        id: 1,
        name: "General",
      };
    },
  },
};
