import Mock from 'mockjs';

const Ajgls = [];
const Qxmcs = [];
const Dwlxs = [];

for (let i = 0; i < 86; i++) {
    Ajgls.push(Mock.mock({
        id: Mock.Random.guid(),
        qxmc: Mock.mock('@county()'),
        dwmc: Mock.Random.cname(),
        'bfl|1-100.1-3': 1,
        'cls|1-60': 1,
        'xc|1-60': 1,
        'fxc|1-60': 1
    }));
}

for (let i = 0; i < 10; i++) {
    Qxmcs.push(Mock.mock({
        id: Mock.Random.guid(),
        mc: Mock.mock('@county()'),
    }));
}

for (let i = 0; i < 10; i++) {
    Dwlxs.push(Mock.mock({
        id: Mock.Random.guid(),
        mc: Mock.mock('@county(true)')
    }));
}

export { Ajgls, Qxmcs, Dwlxs };