const tap = require('tap');
const sinon = require('../../node_modules/sinon/lib/sinon');
// const React = require('react');
// TODO: Determine how to require jsx files. This throws syntax error (because of jsx format?).
// const GreenFlag = require('../../src/components/green-flag/green-flag.jsx');

tap.test('green-flag renders active state', t => {
  // const component = renderer.create(
  //     <GreenFlag
  //         active={true}
  //     />
  // );
  // TODO: Determine how to use snapshots in tap. May need to import jest or find another third party lib
  // for snaposhots.
  // This is jest code below.
  // expect(component.toJSON()).toMatchSnapshot();
  t.end();
});

tap.test('green-flag triggers onclick when active', t => {
  const onClick = sinon.spy();
  onClick();
  // TODO: Determine how to get renderer working in tap (this comes from jest).
  // TODO: Determine how to use jsx format in tap tests. Would i need a precompile step?
  // const component = renderer.create(
  //     <GreenFlag
  //         active={true}
  //         onClick={onClick}
  //     />
  // );
  // TODO: Determine if simulate is provided by jest and if i need to find an alternative utility or if i can
  // use tap.
  // component.find('img').simulate('click');

  t.ok(onClick.called);
  t.end();
});
