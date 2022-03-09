import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})
export class MainBannerComponent implements OnInit {
  newRelease = [
    {
      id: 1,
      url: "assets/img/main1.jpg",
      name: "The Big Sick",
      score: 7.8,
      category: "Comedy",
      desc: "The Big Sick là bộ phim hài lãng mạn được đạo diễn bởi Micheal Showalter (Hello My Name is Doris). Phim dựa trên câu chuyện cuộc đời của diễn viên chính kiêm biên kịch Kumail Nanjiani và người hiện là vợ anh Emily Gordon. Gia đình Hồi giáo gốc Pakistancủa Kumail không hài lòng về mối quan hệ giữa anh và Emily, vốn là một người Mỹ. -- Tình cảnh của 2 người trở nên éo le hơn bao giờ hết khi Emily bị hành hạ bởi một căn bệnh bí hiểm trong khi Kumaillãnh trách nhiệm 'đối đầu' với phụ huynh của cô. The Big Sick là một trong những bộ phim được đánh giá cao nhất về cả mặt nghệ thuật lẫn thương mại tại Liên hoan phim Sundance năm nay. -- "
    },
    {
      id: 2,
      url: "assets/img/main2.jpg",
      name: "The Layover",
      score: 8,
      category: "Comedy",
      desc: " Phim Chuyến Đi Bất Ngờ - The Layover 2017 kể về câu chuyện hai mỹ nữ trong chuyến du lịch đi Florida. Họ phải đối mặt với nhiều tình huống trớ trêu trên chặng đường dài vì bị đổi hướng đi không như dự kiến. --  "
    },
    {
      id: 3,
      url: "assets/img/main3.jpg",
      name: "Just Go with It",
      score: 9,
      category: "Comedy",
      desc: "Danny là bác sĩ phẫu thuật thẩm mỹ mang chiếc nhẫn cưới giả như là một “chiêu” để lấy lòng các cô gái trẻ đẹp. Khi gặp cô gái bốc lửa Palmer, Danny mới nhận ra trò đùa này tai hại đến mức nào. Anh nhờ cô trợ lý tận tụy nhiều năm nay Katherine đóng giả cô vợ đỏng đảnh khó tính và thuyết phục người đẹp Palmer rằng họ sắp ly dị. Rắc rối tiếp nối rắc rối khi họ bị cuốn vào một kỳ nghỉ ở Hawaii. Giữa hàng tá những tình huống dở khóc dở cười, Danny chợt nhận ra…. --  "
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
