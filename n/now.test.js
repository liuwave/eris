it('equals with calling Date.now', function ()
{
    var a = now(),
        b = Date.now();

    expect(a).to.above(b - 100);
    expect(a).to.below(b + 100);
});
