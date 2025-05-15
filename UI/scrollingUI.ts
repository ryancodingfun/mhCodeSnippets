const MyScrollView = ui.ScrollView({
    children: [
      ui.Text({
        text: 'This is a line of content about Lorem Ipsum.\n\nThis maybe one, too.\n\n',
        style: {fontFamily: 'Anton', fontSize: 18, color: 'gray'},
      }),
      ui.Text({
        text: 'Lorem ipsum ... laborum.\n\n',
        style: {fontFamily: 'Anton', fontSize: 18, color: 'gray'},
      }),
      ui.Text({
        text: 'Lorem ipsum ... laborum.\n\n',
        style: {fontFamily: 'Anton', fontSize: 18, color: 'gray'},
      }),
      ui.Text({
        text: 'Lorem ipsum ... laborum.\n\n',
        style: {fontFamily: 'Anton', fontSize: 18, color: 'gray'},
      }),
    ],
  
    // contentContainerStyle defines properties of the ScrollView object's container.
    contentContainerStyle: {height: 1200, alignItems: 'flex-start'},
    horizontal: false,
    style: {
      height: 300,
      width: 200,
    },
  });