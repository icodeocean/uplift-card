const resolvers = {
    Query: {
        deal: async (_, {}, value) => {
            return await value.contextData.card.deal();
        }
    },
    Mutation: {
        reset: async (_, __, value) => {
            return await value.contextData.card.reset();
        }
    }
};
export default resolvers;
