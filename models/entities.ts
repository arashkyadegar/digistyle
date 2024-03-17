export class MenuItem {
  title1: string = "";
  title2: string = "";
  imageList: ImageItem[] = [];
  subMenuList1: SubMenuItem[] = [];
  subMenuList2: SubMenuItem[] = [];
}
export class SubMenuItem {
  title: string = "";
  name: string = "";
}
export class ImageItem {
  title: string = "";
  name: string = "";
  url: string = "";
}
