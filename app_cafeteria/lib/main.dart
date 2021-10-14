// ignore_for_file: sized_box_for_whitespace, use_key_in_widget_constructors, prefer_const_constructors

import 'package:flutter/material.dart';
// ignore: import_of_legacy_library_into_null_safe
import 'package:flutter_svg/svg.dart';

class BotaookWidget extends StatefulWidget {
  @override
  _BotaookWidgetState createState() => _BotaookWidgetState();
}

class _BotaookWidgetState extends State<BotaookWidget> {
  @override
  Widget build(BuildContext context) {
    // Figma Flutter Generator BotaookWidget - COMPONENT

    return Container(
        width: 369,
        height: 109,
        child: Stack(children: <Widget>[
          Positioned(
            top: 0,
            left: 0,
            child: SvgPicture.asset('images/retangulook.svg',
                semanticsLabel: 'retangulook'),
          ),
          Positioned(
              top: 27,
              left: 150,
              child: Text(
                'OK',
                textAlign: TextAlign.left,
                style: TextStyle(
                    color: Color.fromRGBO(255, 255, 255, 1),
                    fontFamily: 'Arial',
                    fontSize: 48,
                    letterSpacing:
                        0 /*percentages not used in flutter. defaulting to zero*/,
                    fontWeight: FontWeight.normal,
                    height: 1),
              )),
        ]));
  }
}
