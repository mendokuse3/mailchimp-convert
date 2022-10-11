import { convert } from './convert';

const input2 = `# Header one

Hello there

How are you?
What's going on?

## Another Header

This is a paragraph [with an inline link](http://google.com). Neat, eh?

## This is a header [with a link](http://yahoo.com)`;

const output2 = `<h1>Header one</h1>

<p>Hello there</p>

<p>How are you?
What's going on?</p>

<h2>Another Header</h2>

<p>This is a paragraph <a href="http://google.com">with an inline link</a>. Neat, eh?</p>

<h2>This is a header <a href="http://yahoo.com">with a link</a></h2>`;

describe('test convert func', () => {
    it('sample2 input returns html2', async () => {
        let response = await convert(input2)

        expect(response).toEqual(output2)
    })
});