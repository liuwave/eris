it('unescape html', function ()
{
    expect(unescape('&amp;&lt;&gt;&quot;&#x27;&#x60;')).to.equal('&<>"\'`');
});