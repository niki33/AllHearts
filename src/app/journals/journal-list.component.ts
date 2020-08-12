import { Component } from '@angular/core';

@Component({
selector:'jm-journals',
templateUrl:'./journal-list.component.html'
})

export class JournalListComponent{
pageTitle:string='Journal List';
journals:any[]=[
    {
        cardTitle:"Agni",
        cardText:"Explain the importance of agni-Fire in Hindu Culture"
    },
    {
        cardTitle:"Agni",
        cardText:"Explain the importance of agni-Fire in Hindu Culture"
    },
    {
        cardTitle:"Agni",
        cardText:"Explain the importance of agni-Fire in Hindu Culture"
    }
]
}