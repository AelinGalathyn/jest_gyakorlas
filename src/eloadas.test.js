const Eloadas = require('./eloadas');

test('készít egy üres előadást', () => {
    expect(() => new Eloadas(4, 5).not.toThrow());
});

test('rossz bemenetet dob vissza - sor', () => {
    expect(() => new Eloadas(0, 5).toThrow());
});

test('rossz bemenetet dob vissza - hely', () => {
    expect(() => new Eloadas(5, 0).toThrow());
});

test('rossz bemenetet dob vissza - mindkettő', () => {
    expect(() => new Eloadas(0, 0).toThrow());
});

test('létrehoz egy nem null tömböt', () => {
    expect(() => new Eloadas(3, 5).not.toEqualNull());
});

test('megfelelő méretű tömböt készít - sor ellenőrzés', () => {
    expect(() => new Eloadas(3, 5).foglalasok.length.toEqual(3));
});

test('megfelelő méretű tömböt készít - hely ellenőrzés', () => {
    expect(() => new Eloadas(3, 5).foglalasok.length[0].toEqual(5));
});

test('létrehozás után minden hely szabad', () => {
    expect(() => {
        const eloadas = new Eloadas(3, 5);
        for (let i = 0; i < eloadas.length; i++) {
            for (let j = 0; j < eloadas[i].length; j++) {
                if (eloadas[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }).toBeTruthy();
});

test('lefoglalás sikeres', () => {
    expect(() => {
        const eloadas = new Eloadas(3, 5);
        return eloadas.lefoglal;
    }).toBeTruthy();
});

test('lefoglalás sikertelen', () => {
    expect(() => {
        const eloadas = new Eloadas(3, 3);
        for (let i = 0; i < eloadas.foglalasok.length * eloadas.foglalasok[i].length; i++) {
            eloadas.lefoglal();
        }
        return eloadas.lefoglal;
    }).toBeFalsy();
});

test('foglaláskor az első helyet foglalja le', () => {
    expect(() => {
        const eloadas = new Eloadas(3, 3);
        eloadas.lefoglal();
        return eloadas[0, 0];
    }).toBeTruthy();
});

test('minden hely szabad', () => {
    expect(() => {
        const eloadas = new Eloadas(3, 3);
        return eloadas.getSzabadhelyek();
    }).toEqual(9);
});

test('nincs szabad hely', () => {
    expect(() => {
        const eloadas = new Eloadas(3, 3);
        for (let i = 0; i < eloadas.foglalasok.length * eloadas.foglalasok[i].length; i++) {
            eloadas.lefoglal();
        }
        return eloadas.getSzabadhelyek();
    }).toEqual(0);
});

test('van szabad hely', () => {
    expect(() => {
        const eloadas = new Eloadas(3, 3);
        eloadas.lefoglal();
        eloadas.getSzabadhely().not.toEqual(0);
    });
});

test('teli van', () => {
    expect(() => {
        const eloadas = new Eloadas(3, 3);
        for (let i = 0; i < eloadas.foglalasok.length * eloadas.foglalasok[i].length; i++) {
            eloadas.lefoglal();
        }
        eloadas.getTeli().toBeTruthy();
    });
});

test('nincs teli', () => {
    expect(() => {
        const eloadas = new Eloadas(3, 3);
        eloadas.lefoglal();
        eloadas.getTeli().toBeFalsy();
    });
});

test('az ellenőrzött hely foglalt', () => {
    expect(() => {
        const eloadas = new Eloadas(3, 3);
        eloadas.lefoglal();
        eloadas.foglalt(1, 1).toBeTruthy();
    });
});

test('az ellenőrzött hely nem foglalt', () => {
    expect(() => {
        const eloadas = new Eloadas(3, 3);
        eloadas.lefoglal();
        eloadas.foglalt(1, 2).toBeFalsy();
    });
});

test('helytelen foglalás ellenőrzés - sor(min)', () => {
    expect(() => {
        const eloadas = new Eloadas(3, 3);
        eloadas.foglalt(0, 1).toThrow();
    });
});

test('helytelen foglalás ellenőrzés - hely(min)', () => {
    expect(() => {
        const eloadas = new Eloadas(3, 3);
        eloadas.foglalt(1, 0).toThrow();
    });
});

test('helytelen foglalás ellenőrzés - mindkettő(min)', () => {
    expect(() => {
        const eloadas = new Eloadas(3, 3);
        eloadas.foglalt(0, 0).toThrow();
    });
});

test('helytelen foglalás ellenőrzés - sor(max)', () => {
    expect(() => {
        const eloadas = new Eloadas(3, 3);
        return eloadas.foglalt(5, 3);
    }).not.toThrow();
});

test('helytelen foglalás ellenőrzés - hely(max)', () => {
    expect(() => {
        const eloadas = new Eloadas(3, 3);
        eloadas.foglalt(3, 5).toThrow();
    });
});

test('helytelen foglalás ellenőrzés - mindkettő(max)', () => {
    expect(() => {
        const eloadas = new Eloadas(3, 3);
        eloadas.foglalt(5, 5).toThrow();
    });
});