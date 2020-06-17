import MockStore from '../../AddOns/mock/reduxStore.js';

describe('Todo Store', () => {
    let store;

    beforeEach(() => {
        store = MockStore({
            todo: {
                    todos: [{
                    id: "1",
                    text: "text",
                    status: "PENDING",
                    createdAt: Date.now(),
                    formatedDate: "1"
                }]
            }
        })
    });

    it('it should have equal length', () => {
        let { todo: { todos } } = store.getState();
        expect(todos).toHaveLength(1);
    });
});