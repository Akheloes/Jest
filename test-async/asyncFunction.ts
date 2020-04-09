import {Observable, from, of} from 'rxjs';
import {delay} from 'rxjs/operators';

export class AsyncClass {
    public resolveAfter10seconds(): Observable<boolean> {
        return of(true).pipe(delay(6000));
    }
    
    public async asyncCall(): Promise<boolean> {
        const result = await this.resolveAfter10seconds();
        return result.toPromise();
    }
}

// (new AsyncClass()).asyncCall().then(result => {
//     console.log(result);
// })

    // This syntax does not work, why ?
    // return new Observable<boolean>(observer => {
    //     setTimeout(() => {
    //         // console.log('--in setTimeout--')
    //         observer.next(true);
    //     }, 6000);
    //     observer.next(true);
    // });