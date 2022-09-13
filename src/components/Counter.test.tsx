import React from 'react'; import { render, screen } from '@testing-library/react'; 
import Counter from './Counter';
import userEvent from '@testing-library/user-event';

test("Должно считываться корректное начальное значение.", () => {
    render(<Counter initialValue={7} />);
    const count = screen.queryByText(7);
    expect(count).toBeVisible();
});

test("Должно быть корректное дефолтное значение", () => {
    render(<Counter/>);
    const count = screen.queryByText(0);
    expect(count).toBeVisible();
});

test("Значение должно увеличиться корректно, при нажатии на кнопку 'увеличить' один раз.", () => {
    render(<Counter initialValue={1} />);
    const addButton = screen.getByText("Увеличить");
    userEvent.click(addButton);
    const count = screen.queryByText(2);
    expect(count).toBeVisible();
});

test("Значение должно увеличиться корректно, при нажатии на кнопку 'увеличить' два раза.", () => {
    render(<Counter initialValue={1} />);
    const addButton = screen.getByText("Увеличить");
    userEvent.click(addButton);
    userEvent.click(addButton);
    const count = screen.queryByText(3);
    expect(count).toBeVisible();
});

test("Значение должно уменьшиться корректно, при нажатии на кнопку 'уменьшить' один раз.", () => {
    render(<Counter initialValue={1} />);
    const addButton = screen.getByText("Уменьшить");
    userEvent.click(addButton);
    const count = screen.queryByText(0);
    expect(count).toBeVisible();
});

test("Значение должно уменьшиться корректно, при нажатии на кнопку 'уменьшить' два раза.", () => {
    render(<Counter initialValue={7} />);
    const addButton = screen.getByText("Уменьшить");
    userEvent.click(addButton);
    userEvent.click(addButton);
    const count = screen.queryByText(5);
    expect(count).toBeVisible();
});

test("Значение не должно быть меньше нуля, при нажатии на кнопку 'уменьшить', когда значение СЧЕТ равно 0.", () => {
    render(<Counter />);
    const addButton = screen.getByText("Уменьшить");
    userEvent.click(addButton);
    const count = screen.queryByText(0);
    expect(count).toBeVisible();
});

test("Значение не должно быть меньше нуля, при нажатии на кнопку 'уменьшить', когда начальное значение значение СЧЕТ равно 2 и кнопка нажата 4 раза.", () => {
    render(<Counter initialValue={2} />);
    const addButton = screen.getByText("Уменьшить");
    userEvent.click(addButton);
    userEvent.click(addButton);
    userEvent.click(addButton);
    userEvent.click(addButton);
    const count = screen.queryByText(0);
    expect(count).toBeVisible();
});