import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  movies1 = [{
    topic: "Bí ẩn"
  },{
    topic: "Chiến tranh"
  },{
    topic: "Chiến tranh - Chính trị"
  },{
    topic: "Drama"
  },{
    topic: "Gia đình"
  },
]

movies2 = [{
  topic: "Bí ẩn"
},{
  topic: "Bí ẩn1"
},{
  topic: "Bí ẩn2"
},{
  topic: "Bí ẩn3"
},{
  topic: "Bí ẩn4"
},
]

movies3 = [{
  topic: "Bí ẩn"
},{
  topic: "Bí ẩn1"
},{
  topic: "Bí ẩn2"
},{
  topic: "Bí ẩn3"
},{
  topic: "Bí ẩn4"
},
]
  constructor() { }

  ngOnInit(): void {
  }
  // onShowSearch = (e:any) => {
  //   let el = e.currentTarget
  //   let parentEl = el.parentElement
  //   parentEl.nativeElement.focus()
  // }

}
