import { updateTimes } from "../pages/BookingPage";

test('returns the same value that is provided in the state', () => {
    expect(updateTimes()).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']);
});