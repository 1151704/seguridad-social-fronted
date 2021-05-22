import { Injectable } from '@angular/core';
import { NotificationType, Notification } from '../models/notification';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class NotificacionService {

  private _subject = new Subject<Notification>();
  private _idx = 0;

  constructor() { }

  getObservable(): Observable<Notification> {
    return this._subject.asObservable();
  }

  info(title: string, message: string, timeout = 3000) {
    this._subject.next(new Notification(this._idx++, NotificationType.info, title, message, timeout));
  }

  success(title: string, message: string, timeout = 3000) {
    this._subject.next(new Notification(this._idx++, NotificationType.success, title, message, timeout));
  }

  warning(title: string, message: string, timeout = 3000) {
    this._subject.next(new Notification(this._idx++, NotificationType.warning, title, message, timeout));
  }

  error(title: string, error: any, timeout = 0) {
    let message = error;
    console.error(error);
    if (error) {
      if (error.status) {
        message = 'Error ' + error.status;
      }
      if (error.error) {
        message= error.error;
        if (error.error.Message) {
          message = error.error.Message;
        }
        if (error.error.message) {
          message = error.error.message;
        }
        if (error.error.ModelState) {
          message += '\n' + JSON.stringify(error.error.ModelState);
        }
        if (error.error.Errors) {
          error.error.Errors.forEach(element => {
            message += '\n' + element;
          });
        }
      }
    }
    this._subject.next(new Notification(this._idx++, NotificationType.error, title, message, timeout));
  }

  convertToText(obj) {
    //create an array that will later be joined into a string.
    var string = [];

    //is object
    //    Both arrays and objects seem to return "object"
    //    when typeof(obj) is applied to them. So instead
    //    I am checking to see if they have the property
    //    join, which normal objects don't have but
    //    arrays do.
    if (obj == undefined) {
      return String(obj);
    } else if (typeof (obj) == "object" && (obj.join == undefined)) {
      for (let prop in obj) {
        if (obj.hasOwnProperty(prop))
          string.push('<div class="elemento">' + prop + " : " + this.convertToText(obj[prop]) + '</div>');
      };
      return string.join('\n');

      //is array
    } else if (typeof (obj) == "object" && !(obj.join == undefined)) {
      for (let prop in obj) {
        string.push('<div class="elemento">' + this.convertToText(obj[prop]) + "</div>");
      }
      return string;

      //all other values can be done with JSON.stringify
    } else {
      string.push(JSON.stringify(obj))
    }

    return string;
  }

}
