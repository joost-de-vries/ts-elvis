
function getProperty<T, K extends keyof T>(t: T, key: K): T[K] {
    return t[key];
}

function getPropertyRemoveUndefined<T, K extends keyof T>(t: Partial<T>, key: K): T[K] {
    // Put it in a value, since `t[p]` is not narrowed only t.p which is not possible here
    var value = t[key];
    if (value) {
        return value;
    }
    throw new Error('Value does not exist at key');
}

function getProp<T, K extends keyof T>(this: Partial<T>, key: K): T[K] {
    var value = this[key];
    if (value) {
        return value;
    }
    throw new Error('Value does not exist at key');
}

function getProp2<T, K extends keyof T, K2 extends keyof T[K]>(this: Partial<T>, key: K, key2: K2): T[K][K2] {
    var value = this[key];
    if (value) {
        const value2 = value[key2]
        if (value2) {
            return value2
        }
    }
    throw new Error('Value does not exist at key');
}

function getProp3<T, K extends keyof T, K2 extends keyof T[K], K3 extends keyof T[K][K2]>(this: Partial<T>, key: K, key2: K2, key3: K3): T[K][K2][K3] {
    var value = this[key];
    if (value) {
        const value2 = value[key2]
        if (value2) {
            const value3 = value2[key3]
            if (value3) {
                return value3
            }
        }
    }

    throw new Error('Value does not exist at key');
}

function getProp4<T, K extends keyof T, K2 extends keyof T[K], K3 extends keyof T[K][K2], K4 extends keyof T[K][K2][K3]>(this: Partial<T>, key: K, key2: K2, key3: K3, key4: K4): T[K][K2][K3][K4] {
    var value = this[key];
    if (value) {
        const value2 = value[key2]
        if (value2) {
            const value3 = value2[key3]
            if (value3) {
                const value4 = value3[key4]
                if (value4) {
                    return value4;
                }
            }
        }
    }

    throw new Error('Value does not exist at key');
}

Object.prototype["getProp"] = getProp
Object.prototype["getProp2"] = getProp2
Object.prototype["getProp3"] = getProp3
Object.prototype["getProp4"] = getProp4

interface Object {
    getProp: typeof getProp
    getProp2: typeof getProp2
    getProp3: typeof getProp3
    getProp4: typeof getProp4
}
