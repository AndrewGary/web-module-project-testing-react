import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';

test('renders without errors with no props', async () => {
    render(<Display />)
 });

test('renders Show component when the button is clicked ', async () => {
    render(<Display />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const test = await screen.findByText('Select A Season');

    expect(test).toBeTruthy();
 });

test('renders show season options matching your data when the button is clicked', async () => {
    render(<Display />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const test = await screen.findByText('Select A Season');

    expect(test).toBeTruthy();
 });
