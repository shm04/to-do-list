import 'fast-text-encoding';
import { JSDOM } from 'jsdom';
import { createTask } from './src/createDelete.js';

describe('createTask', () => {
  beforeAll(() => {
    const { window } = new JSDOM();
    global.document = window.document;
  });

  it('should create a list item', () => {
    const task = {
      description: 'This is a task',
      completed: false,
    };
    createTask([task]);
    const list = document.querySelector('.list');
    expect(list.querySelectorAll('.list-item').length).toBe(1);
    expect(list.querySelector('.list-item .li-text').textContent).toBe('This is a task');
  });
});
