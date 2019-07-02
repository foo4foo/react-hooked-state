import React from 'react';
import { mount } from 'enzyme';
import mockStore from '../fixtures/mockStore';
import { Provider, useSelector, useUpdateStore } from '../src';

describe('application test', () => {
  it('reads and renders data from store', () => {
    const StoreConsumer = () => {
      const persons = useSelector(state => state.persons);

      return (
        <div>
          {persons.map(person => (
            <p key={person.id}>{`${person.name} ${person.lastName}`}</p>
          ))}
        </div>
      );
    };

    const wrapper = mount(
      <div className="app-container">
        <Provider store={mockStore}>
          <div>
            <StoreConsumer />
          </div>
        </Provider>
      </div>
    );

    expect(wrapper.find('p').length).toEqual(2);
  });

  it('updates data in store', async () => {
    const StoreConsumer = () => {
      const persons = useSelector(state => state.persons);

      const updateStore = useUpdateStore();

      const addPerson = () => {
        updateStore({
          persons: [...persons, { id: persons.length + 1, name: 'Random', lastName: 'Random' }]
        });
      };

      return (
        <div>
          {persons.map(person => (
            <p key={person.id}>{`${person.name} ${person.lastName}`}</p>
          ))}
          <button type="button" onClick={addPerson}>
            Add person
          </button>
        </div>
      );
    };

    const wrapper = mount(
      <div className="app-container">
        <Provider store={mockStore}>
          <div>
            <StoreConsumer />
          </div>
        </Provider>
      </div>
    );

    expect(wrapper.find('p').length).toEqual(2);

    wrapper.find('button').simulate('click');

    expect(wrapper.find('p').length).toEqual(3);
  });
});
