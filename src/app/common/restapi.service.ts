import {Injectable} from '@angular/core';
import {task} from './tasks/tasks';
import {themoney} from './money/money';
import {MOCK_TASKS} from './tasks/mock-tasks';
import {MOCK_MONEY} from './money/mock-money';

@Injectable()

export class RestApiService{
    getlistoftasks(): task[]{
        return MOCK_TASKS;
        }
     getlistofmoney(): themoney[]{
            return MOCK_MONEY;
            }    
}