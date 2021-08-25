import { FormControl } from "@angular/forms";
import { timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";

export const UserNameExistValidator = (
  userService: any,
  time: number = 500
) => {
  return (input: FormControl) => {
    return timer(time).pipe(
      switchMap(() => userService.isExistName(input.value)),
      map((res) => {
        return !res ? null : { UserNameExist: true };
      })
    );
  };
};
