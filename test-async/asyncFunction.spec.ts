import {AsyncClass} from './asyncFunction';
import { Observable, of } from 'rxjs';

describe('asyncCall', () => {
    const asyncObject = new AsyncClass();
    it('returns true', async (done) => {
        // spyOn(asyncObject, 'resolveAfter10seconds').and.returnValue(
        //     new Observable<boolean>(observer => {
        //         observer.next(true);
        //     })
        // );
        spyOn(asyncObject, 'resolveAfter10seconds').and.returnValue(
            of(true)
        );
        asyncObject.asyncCall().then(result => {
            expect(result).toBeTruthy();
            done();
        })
    })
});