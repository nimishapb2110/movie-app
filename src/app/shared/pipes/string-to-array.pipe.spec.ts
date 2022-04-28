import { StringToArrayPipe } from './string-to-array.pipe';

describe('StringToArrayPipe', () => {
    let pipe: StringToArrayPipe;

    beforeEach(() => {
        pipe = new StringToArrayPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return array of words from the comma separated string', () => {
        const transformedArray = pipe.transform('abc,def');
        expect(transformedArray).toEqual(['abc', 'def']);
    });
});