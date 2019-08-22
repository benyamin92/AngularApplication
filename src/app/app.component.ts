import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Blog';

  tabPosts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet eros augue. Etiam facilisis lacus velit, at gravida ante ultrices a. Donec tempor velit ut risus malesuada, sit amet consectetur enim laoreet. Quisque commodo tempus mattis. In hac habitasse platea dictumst. Proin facilisis lorem sed sem rutrum pulvinar. Nunc sem enim, fringilla non vulputate sit amet, pharetra eget leo. Suspendisse id pharetra ante. ',
      loveIts: 2,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet eros augue. Etiam facilisis lacus velit, at gravida ante ultrices a. Donec tempor velit ut risus malesuada, sit amet consectetur enim laoreet. Quisque commodo tempus mattis. In hac habitasse platea dictumst. Proin facilisis lorem sed sem rutrum pulvinar. Nunc sem enim, fringilla non vulputate sit amet, pharetra eget leo. Suspendisse id pharetra ante. ',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Aenean ac pulvinar dolor. Vestibulum luctus tortor commodo blandit pulvinar. Suspendisse efficitur lacus sit amet magna tempor finibus. Morbi molestie lobortis accumsan. Proin fringilla sapien lectus, vestibulum efficitur ex posuere a. Fusce purus nibh, imperdiet non lectus vitae, vestibulum tristique justo. Nullam velit est, tempus vitae condimentum vitae, cursus quis metus. ',
      loveIts: 0,
      created_at: new Date()
    }

  ];

}
