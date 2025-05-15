import * as ui from 'horizon/ui';


type MyButtonProps = {
    label: string;
    onClick: Callback;
    style: ViewStyle;
    baseColor: string;
  };
  
  function MyButton(props: MyButtonProps): UINode {
    const DEFAULT_COLOR = props.baseColor;
    const HOVERED_COLOR = "blue";
    const backgroundColor = new Binding<string>(DEFAULT_COLOR);
    const buttonText = new Binding<string>(props.label);
  
    return Pressable({
      children: Text({
        text: buttonText,
        style: {color: "white"},
      }),
      onClick: props.onClick,
      onEnter: (player: Player) => {
        console.log("onEnter";
        backgroundColor.set(HOVERED_COLOR, [player]);
        buttonText.set("hovered", [player]);
      },
      onExit: (player: Player) => {
        console.log("onExit");
        backgroundColor.set(DEFAULT_COLOR, [player]);
        buttonText.set(props.label, [player]);
      },
      style: {
        backgroundColor: backgroundColor,
        borderRadius: 8,
        height: 36,
        width: 120,
        alignItems: "center",
        justifyContent: "center",
        // additional styles are spreaded the last
        // to override default styles
        ...props.style,
      },
    });
  }