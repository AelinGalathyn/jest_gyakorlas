const Eloadas = require('./eloadas');

beforeEach(() => {
    eloadas = new Eloadas(3, 4);
})

test('készít egy üres előadást', () => {
    expect(() => eloadas).not.toThrow();
});

test('rossz bemenetet dob vissza - sor', () => {
    expect(() => new Eloadas(0, 5)).toThrow();
});

test('rossz bemenetet dob vissza - hely', () => {
    expect(() => new Eloadas(5, 0)).toThrow();
});

test('rossz bemenetet dob vissza - mindkettő', () => {
    expect(() => new Eloadas(0, 0)).toThrow();
});

test('létrehoz egy nem null tömböt', () => {
    expect(eloadas).not.toBeNull();
});

test('megfelelő méretű tömböt készít', () => {
    expect(eloadas.getSzabadhelyek()).toEqual(12);
});

test('lefoglalás sikeres', () => {
    expect(eloadas.lefoglal()).toEqual(true);
});

test('lefoglalás sikertelen', () => {
    const size = eloadas.getSzabadhelyek();
    for (let i = 0; i <= size; i++) {
        eloadas.lefoglal();
    }
    expect(eloadas.lefoglal()).toEqual(false);
});

test('foglaláskor az első helyet foglalja le', () => {
    eloadas.lefoglal();
    expect(eloadas.foglalt(1, 1)).toEqual(true);
});

test('minden hely szabad', () => {
    expect(eloadas.getSzabadhelyek()).toEqual(12);
});

test('nincs szabad hely', () => {
    const helyek = eloadas.getSzabadhelyek();
    for (let i = 0; i < helyek; i++) {
        eloadas.lefoglal();
    }
    expect(eloadas.getSzabadhelyek()).toEqual(0);
});

test('van szabad hely', () => {
    eloadas.lefoglal();
    expect(eloadas.getSzabadhelyek()).not.toEqual(0);
});

test('teli van', () => {
    const helyek = eloadas.getSzabadhelyek();
    for (let i = 0; i < helyek; i++) {
        eloadas.lefoglal();
    }
    expect(eloadas.getTeli()).toEqual(true);
});

test('nincs teli', () => {
    eloadas.lefoglal();
    expect(eloadas.getTeli()).toEqual(false);
});

test('az ellenőrzött hely foglalt', () => {
    eloadas.lefoglal();
    expect(eloadas.foglalt(1, 1)).toEqual(true);
});

test('az ellenőrzött hely nem foglalt', () => {
    eloadas.lefoglal();
    expect(eloadas.foglalt(1, 2)).toEqual(false);
});

test('helytelen foglalás ellenőrzés - sor(min)', () => {
    expect(() => eloadas.foglalt(0, 1)).toThrow();
});

test('helytelen foglalás ellenőrzés - hely(min)', () => {
    expect(() => eloadas.foglalt(1, 0)).toThrow();
});

test('helytelen foglalás ellenőrzés - mindkettő(min)', () => {
    expect(() => eloadas.foglalt(0, 0)).toThrow();
});

test('helytelen foglalás ellenőrzés - sor(max)', () => {
    expect(() => eloadas.foglalt(5, 3)).toThrow();
});

test('helytelen foglalás ellenőrzés - hely(max)', () => {
    expect(() => eloadas.foglalt(5, 3)).toThrow();
});

test('helytelen foglalás ellenőrzés - mindkettő(max)', () => {
    expect(() => eloadas.foglalt(5, 5)).toThrow();
});