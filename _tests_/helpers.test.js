const {format_date, format_plural, format_url} = require('../utils/helpers');

test(
    'format_date() returns a date string', () => {
        const date = new Date('1996-10-22 18:19:10');

        expect(format_date(date)).toBe('10/22/1996')
    }
)

test(
    'format_plural() checks if word should be plural', () => {
        let word = 'wolf';
        let amount = 2;

        expect(format_plural(word, amount)).toBe('wolves')
    }
)

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('https://puppies.com/find-a-puppy?seed=583f4c56-6b65-497d-9257-59199d53af1a');
    const url2 = format_url('https://www.ilikedogs.com');
    const url3 = format_url('https://www.google.com/doodles');
  
    expect(url1).toBe('puppies.com');
    expect(url2).toBe('ilikedogs.com');
    expect(url3).toBe('google.com');
  });