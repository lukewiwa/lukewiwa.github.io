import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
//

const magCode = `
Apparatus       |  Element Group  |  Value  |  Index  |  Description
----------------|-----------------|---------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Floor Exercise  |  1              |  A      |  1      |  From hdst. lower to L-sit or strad. L-sit (2 s.).
Floor Exercise  |  1              |  A      |  7      |  From stand, Swiss press to hdst. (2 s.).
Floor Exercise  |  1              |  A      |  13     |  Rock to hdst. from prone position (2 s.).
Floor Exercise  |  1              |  A      |  19     |  Handstand (2 s.).
Floor Exercise  |  1              |  B      |  2      |  V-sit (2 s.).
Floor Exercise  |  1              |  B      |  8      |  Piked body, str. arm or str. body, bent arm press to hdst. with legs together (2 s.).
Floor Exercise  |  1              |  B      |  14     |  Swiss press from split, L-sit, strad. L-sit or front sup. (2 s.).
Floor Exercise  |  1              |  B      |  20     |  Press or lower or swing to Japanese hdst. (2 s.).
Floor Exercise  |  1              |  C      |  3      |  V-sit with legs horiz. (2 s.).(Manna)
Floor Exercise  |  1              |  C      |  9      |  V-sit (2 s) and press to hdst. (2 s.)
Floor Exercise  |  1              |  C      |  21     |  From split press to Japanese handstand (2 s.).
Floor Exercise  |  1              |  D      |  10     |  Manna (2 s.) and press to hdst. (2 s.)
Floor Exercise  |  1              |  D      |  16     |  From Manna (2 s.), turn over (dislocation) to handstand (2 s.).
Floor Exercise  |  1              |  A      |  25     |  Support lever, legs straddle (2 s.).
Floor Exercise  |  1              |  A      |  31     |  ½ or 1/1 turn in handstand or to handstand.
Floor Exercise  |  1              |  A      |  37     |  From L-sit, etc., turn over bwd. to stand.
Floor Exercise  |  1              |  B      |  26     |  Support lever (2 s.).
Floor Exercise  |  1              |  B      |  32     |  From straddled support lever (2 s.) press hdst. (2 s.).
Floor Exercise  |  1              |  B      |  44     |  Endo roll to handstand (2 s.).
Floor Exercise  |  1              |  C      |  27     |  Swallow (2 s.).
Floor Exercise  |  1              |  C      |  33     |  From support lever 2 s. press handstand (2 s.).
Floor Exercise  |  1              |  C      |  45     |  Endo roll piked to handstand (2 s.). Also final phase with straddle.
Floor Exercise  |  1              |  D      |  34     |  From Swallow 2 s. press to Japanese hdst. (2 s.).(Alvariño)
Floor Exercise  |  1              |  A      |  49     |  From stand or rear support, push off 1 foot through hdst. or back walkover.
Floor Exercise  |  1              |  A      |  55     |  Forward walkover.
Floor Exercise  |  1              |  A      |  61     |  Cross or side split (stop required).
Floor Exercise  |  1              |  A      |  67     |  Any standing scale (2 s.).
Floor Exercise  |  1              |  B      |  68     |  Any standing scale with 180° hold (2 s.).
Floor Exercise  |  1              |  A      |  73     |  Jump bwd. to front support.
Floor Exercise  |  1              |  A      |  79     |  Butterfly.
Floor Exercise  |  1              |  A      |  85     |  Breakdance variations.
Floor Exercise  |  1              |  A      |  91     |  2 circles or flairs.
Floor Exercise  |  1              |  B      |  74     |  Jump bwd. with pike-stretch or with 1/1 turn to front support.
Floor Exercise  |  1              |  B      |  80     |  Butterfly with 1/1 twist fwd. or bwd.(Tong Fei)
Floor Exercise  |  1              |  B      |  92     |  Circles or flair to handstand.
Floor Exercise  |  1              |  C      |  81     |  Butterfly with 2/1 twist.
Floor Exercise  |  1              |  C      |  93     |  (Gogoladze) Flair or circle to hdst. continue to flair or circle.
Floor Exercise  |  1              |  D      |  94     |  Flair hopping with 360° t. bwd. thr. hdst and back to flair (2 hops).
Floor Exercise  |  1              |  A      |  103    |  Flair with ½ spindle.
Floor Exercise  |  1              |  A      |  115    |  Russian wendeswing with 360° or 540°
Floor Exercise  |  1              |  B      |  98     |  Lower from hdst. to flair or circle.
Floor Exercise  |  1              |  B      |  104    |  Flair with 1/1 spindle (in 2 circles).
Floor Exercise  |  1              |  B      |  110    |  Flair with ½ spindle to handstand.
Floor Exercise  |  1              |  B      |  116    |  Russian wendeswing with 720° or 900°
Floor Exercise  |  1              |  C      |  105    |  Flair with >270 spindle (in 2 circles) directly to handstand.
Floor Exercise  |  1              |  C      |  117    |  (Fedorchenko)Russian wendeswing with 1080° or more.
Floor Exercise  |  1              |  D      |  112    |  Flair with > 270º spindle (in 2 circles) directly to handstand and continue to circle or flair.
Floor Exercise  |  1              |  A      |  121    |  Roll bwd. through hdst. with ½ t.
Floor Exercise  |  1              |  B      |  122    |  Roll bwd. with hop 1/1 t. through hdst.
Floor Exercise  |  2              |  A      |  1      |  Neck or head spring w. ½ t. to hdst. or 1/1 t. to rear support.
Floor Exercise  |  2              |  A      |  7      |  Forward handspring or flyspring.
Floor Exercise  |  2              |  A      |  13     |  Dive roll.
Floor Exercise  |  2              |  A      |  19     |  Salto fwd. tucked or piked.
Floor Exercise  |  2              |  B      |  14     |  Jump with 1/1 twist to fwd. hdsp.
Floor Exercise  |  2              |  B      |  20     |  Salto fwd. stretched.
Floor Exercise  |  2              |  C      |  21     |  Salto fwd. str. to front support.
Floor Exercise  |  2              |  D      |  10     |  Handspring salto fwd. tuck (Marinich style).(Morandi)
Floor Exercise  |  2              |  D      |  22     |  Double salto fwd. tucked.
Floor Exercise  |  2              |  E      |  23     |  Double salto fwd. piked.
Floor Exercise  |  2              |  A      |  25     |  Aerial walkover fwd.
Floor Exercise  |  2              |  A      |  31     |  ½Salto tucked and piked ½ t.½
Floor Exercise  |  2              |  B      |  32     |  Salto tucked with 1/1 t.
Floor Exercise  |  2              |  B      |  38     |  Salto fwd. str. with ½ t.
Floor Exercise  |  2              |  B      |  44     |  Salto tucked 3/2 t.
Floor Exercise  |  2              |  C      |  39     |  Salto fwd. str. with 1/1 t.
Floor Exercise  |  2              |  C      |  45     |  Salto fwd. str. with 3/2 t.
Floor Exercise  |  2              |  D      |  40     |  Salto fwd. str. with 2/1 t.
Floor Exercise  |  2              |  E      |  29     |  Double salto fwd. tucked with ½ t.
Floor Exercise  |  2              |  E      |  41     |  Salto fwd. str. with 5/2 t.
Floor Exercise  |  2              |  F      |  30     |  Double salto fwd. piked with ½ t.
Floor Exercise  |  2              |  F      |  42     |  Salto fwd. str. with 3/1 t.(Shirai 2)
Floor Exercise  |  2              |  B      |  50     |  Salto fwd. t. or p. to front support.
Floor Exercise  |  2              |  C      |  51     |  Salto fwd. t., p or str. with 1/1 t. to front support.
Floor Exercise  |  2              |  D      |  58     |  Jump fwd. with ½ t. to dbl. salto bwd. t. (Deferr)
Floor Exercise  |  2              |  F      |  54     |  Double salto fwd. tucked with 1/1 turn.
Floor Exercise  |  3              |  A      |  1      |  Salto backwards tucked or piked.
Floor Exercise  |  3              |  A      |  7      |  Salto backwards tucked or piked w. ½ t.
Floor Exercise  |  3              |  A      |  13     |  Back handspring
Floor Exercise  |  3              |  B      |  2      |  Salto backwards stretched.
Floor Exercise  |  3              |  B      |  8      |  Salto backwards str. w. ½ t.
Floor Exercise  |  3              |  B      |  14     |  Tempo salto bwd.
Floor Exercise  |  3              |  B      |  20     |  Salto backwards tucked w. 3/2 t. .
Floor Exercise  |  3              |  C      |  3      |  Double salto bwd. tucked.
Floor Exercise  |  3              |  C      |  15     |  Double salto bwd. piked.
Floor Exercise  |  3              |  C      |  21     |  Salto bwd. str. with 3/2 t.
Floor Exercise  |  3              |  D      |  4      |  Double salto bwd. t. or piked with 1/1 t. Also Arabian double t. or p. ½ t. (Tsukahara)
Floor Exercise  |  3              |  D      |  10     |  Arabian double tucked or piked or double salto bwd. t. or p. with ½ t.
Floor Exercise  |  3              |  D      |  22     |  Salto bwd. str. with 5/2 t.
Floor Exercise  |  3              |  E      |  5      |  Double salto bwd. tucked with 2/1 t.
Floor Exercise  |  3              |  E      |  11     |  Double salto bwd. t. with 3/2 t. or Salto bwd. str. 3/2 to fwd. salto tucked
Floor Exercise  |  3              |  E      |  23     |  Salto bwd. str. with 7/2 t.
Floor Exercise  |  3              |  G      |  6      |  Double salto bwd. tucked with 3/1 (Ri Jong Song)
Floor Exercise  |  3              |  F      |  12     |  Double salto bwd. tucked with 5/2
Floor Exercise  |  3              |  H      |  18     |  Triple salto bwd. tucked. (Liukin)
Floor Exercise  |  3              |  A      |  37     |  Jump bwd. with ½ t. to roll fwd.
Floor Exercise  |  3              |  A      |  43     |  Jump bwd. with ½ t. to handspring forward.
Floor Exercise  |  3              |  B      |  26     |  Salto bwd. str. with 1/1 t.
Floor Exercise  |  3              |  B      |  44     |  Jump bwd. with ½ t. to salto fwd. t. or p. to f. sup.
Floor Exercise  |  3              |  C      |  27     |  Salto bwd. str. with 2/1 t.
Floor Exercise  |  3              |  D      |  28     |  Salto bwd. str. with 3/1 t.
Floor Exercise  |  3              |  E      |  47     |  Double salto straddled with 1/1 t.(Lou Yun)
Floor Exercise  |  3              |  F      |  30     |  Salto bwd. str. with 4/1 t.(Shirai / Nguyen)
Floor Exercise  |  3              |  F      |  48     |  KolyvanovSalto bwd. str. with 2/1 t and salto bwd piked.
Floor Exercise  |  3              |  D      |  52     |  Double salto bwd. stretched.
Floor Exercise  |  3              |  E      |  53     |  Arabian Jump bwd. to dbl. salto fwd. str. or double salto bwd. stretched with ½ t.Tamayo
Floor Exercise  |  3              |  E      |  58     |  Double salto bwd. stretched with 1/1 t. or arabian Jump bwd. to dbl. salto fwd. str. with ½ t.
Floor Exercise  |  3              |  F      |  54     |  Double salto bwd. str. with 3/2 t. or arabian Jump bwd. to dbl. salto fwd. str. with 1/1 t.
Floor Exercise  |  3              |  F      |  59     |  Double salto bwd. str. with 2/1 t.
Floor Exercise  |  3              |  G      |  65     |  Double salto bwd. str. with 5/2 t.
Floor Exercise  |  3              |  H      |  71     |  Double salto bwd. str. with 3/1 t. Shirai 3
Pommel Horse    |  1              |  A      |  1      |  Scissor forward.
Pommel Horse    |  1              |  A      |  7      |  Scissor forward with ½ t.
Pommel Horse    |  1              |  A      |  13     |  Scissor backward.
Pommel Horse    |  1              |  A      |  19     |  Scissor backward with ½ turn.
Pommel Horse    |  1              |  B      |  8      |  Scissor forward with hop swd.
Pommel Horse    |  1              |  B      |  14     |  Double scissor fwd.(¼ t. fwd. a. ¼ t. bwd.).
Pommel Horse    |  1              |  C      |  3      |  Double Scissor Fwd. with Travel Sideways through Handstand.(Stepanyan)
Pommel Horse    |  1              |  C      |  9      |  Scissor fwd. with hop swd. from one end to the other (3/3).
Pommel Horse    |  1              |  C      |  15     |  Double scissor fwd. (¼ t. fwd. a. ¼ t. bwd.) with travel sdw.
Pommel Horse    |  1              |  D      |  4      |  Scissor fwd. w. ¼ t. through hstd. on 1 p., lower to sup. w. strad. legs on the other arm.
Pommel Horse    |  1              |  D      |  16     |  Double scissor forward with hop sideways from one end to the other (3/3).(Mikulak)
Pommel Horse    |  1              |  D      |  22     |  Swing bwd. w. ¼ t. through hstd. on 1 p., lower to sup. w. strad. legs on the other arm.
Pommel Horse    |  1              |  B      |  26     |  Scissor bwd.with hop swd.(also with ½ t.).
Pommel Horse    |  1              |  B      |  32     |  Double scissor bwd. (¼ t. fwd. a. ¼ t. bwd).
Pommel Horse    |  1              |  B      |  44     |  Leg cut or undercut bwd. through hdst. and lower to support w. strad. legs.
Pommel Horse    |  1              |  C      |  27     |  Scissor bwd. with hop swd. from one end to the other
Pommel Horse    |  1              |  C      |  45     |  Leg cut or undercut bwd. through hdst. and lower to flair or circle.
Pommel Horse    |  1              |  D      |  34     |  Scissor fwd. 1/4 t. to hdst., 1/4 t. and straddle down bwd on 1 arm on the other pommel.(Bryan)
Pommel Horse    |  1              |  D      |  40     |  Scissor bwd. ¼ t. to hdst., ¼ t. and straddle down bwd on 1 arm on the other pommel.
Pommel Horse    |  2              |  A      |  1      |  Any circle or flair in side support.
Pommel Horse    |  2              |  A      |  13     |  Circles in cross support frontways on end.
Pommel Horse    |  2              |  A      |  19     |  Circles in cross support rearways on end.
Pommel Horse    |  2              |  B      |  2      |  Circle in side support on 1 pommel.
Pommel Horse    |  2              |  B      |  8      |  Circle with support outside pommels or between the pommels.
Pommel Horse    |  2              |  B      |  14     |  Circles in cross support on 1 pommel
Pommel Horse    |  2              |  B      |  20     |  Circles in cross support between the pommels.
Pommel Horse    |  2              |  A      |  25     |  Circle in side sup., ¼ spindle to cross sup.
Pommel Horse    |  2              |  A      |  31     |  Cross support on end, circle with ¼ spindle to side support.
Pommel Horse    |  2              |  B      |  26     |  Side support, ½ spindle.
Pommel Horse    |  2              |  B      |  32     |  Cross support on end, ½ spindle.
Pommel Horse    |  2              |  B      |  38     |  Flair or circle through hdst. and lower to sup. w. strad. legs.
Pommel Horse    |  2              |  C      |  39     |  Flair or circle through hdst. (with or without ½ t.) and lower to flair or circle.(Tippelt)
Pommel Horse    |  2              |  C      |  45     |  Flair with hop travel bwd. through hdst. and lower to sup. w. straddle legs.
Pommel Horse    |  2              |  D      |  28     |  Any side support 1/1 spindle w. legs straddle inside max. 2 circles.
Pommel Horse    |  2              |  D      |  34     |  Any cross support 1/1 spindle within max. 2 circles. (also with ?, ½ or 2/3 travel).
Pommel Horse    |  2              |  D      |  46     |  Flair with hop travel bwd. through hdst. and lower to circles or flairs.
Pommel Horse    |  2              |  E      |  29     |  Any side support 1/1 spindle with hand support to the other side and return (max. 2 flairs or circles).(Eichorn)
Pommel Horse    |  2              |  E      |  35     |  Cross support, 1/1 spindle with hands between the pommels max. 2 circles. (also with ? travel).
Pommel Horse    |  2              |  E      |  41     |  1/1 spindle w. legs straddle or together on the pommels inside max. 2 circles. (Berki)
Pommel Horse    |  2              |  F      |  30     |  Side support, 1/1 spindle with both pommels between the hands (flair or circle).
Pommel Horse    |  2              |  A      |  61     |  Double rear (kehr).
Pommel Horse    |  2              |  B      |  50     |  Direct Stöckli A (DSA).
Pommel Horse    |  2              |  B      |  56     |  Direct Stöckli B (DSB).
Pommel Horse    |  2              |  B      |  62     |  Kehrswing bwd. hop with ½ t. on the pommels.
Pommel Horse    |  2              |  B      |  68     |  Kehr with 270º t. on 1 p. (Sohn technique) from cross to side support.
Pommel Horse    |  2              |  C      |  51     |  Reverse Stöckli or DSA strad. through hdst. and lower to sup. w. strad. legs or circle.
Pommel Horse    |  2              |  C      |  69     |  Kehr with 270º t. on 1 p. (Sohn technique) from side to cross support.
Pommel Horse    |  2              |  E      |  65     |  Kehr with 1/1 turn on 1 pommel.(Sohn)
Pommel Horse    |  2              |  F      |  54     |  Reverse Stöckli, DSA or pommel circle strad. through hdst., 3/3 travel (fwd.- bwd), 360º turn to flairs.
Pommel Horse    |  2              |  A      |  79     |  Wendeswing fwd. w. ½ t. to sup. fw. on the end, from side support using 1 or 2 pommels.
Pommel Horse    |  2              |  A      |  91     |  Schwabenflank.
Pommel Horse    |  2              |  B      |  74     |  Direct Tramlot.
Pommel Horse    |  2              |  B      |  80     |  Reverse Stöckli, 180° or 270° turn in one circle.
Pommel Horse    |  2              |  B      |  86     |  Double Swiss.
Pommel Horse    |  2              |  B      |  92     |  Czechkehre on the leather or pommels.
Pommel Horse    |  2              |  C      |  81     |  Reverse Stöckli with 270° t. to 1 pommel.
Pommel Horse    |  2              |  D      |  88     |  Czechkehre outside p. (Pinheiro)
Pommel Horse    |  2              |  E      |  83     |  Reverse Stöckli with 360° t. on 1 pommel.(Bezugo)
Pommel Horse    |  2              |  A      |  97     |  Russian wendeswing with 180
Pommel Horse    |  2              |  A      |  103    |  On the leather, Russian wendeswing with 180°, also with travel.
Pommel Horse    |  2              |  B      |  98     |  Russian wendeswing with 360
Pommel Horse    |  2              |  B      |  104    |  On the leather , Russian wendeswing with 360° or 540°.
Pommel Horse    |  2              |  B      |  110    |  Russian wendeswing with 180° or 270° on 1 p. or between the pommels.
Pommel Horse    |  2              |  C      |  99     |  Russian wendeswing with 720
Pommel Horse    |  2              |  C      |  105    |  On the leather, Russian wendeswing with 720° or 900°.
Pommel Horse    |  2              |  C      |  111    |  Russian wendeswing with 360° pommel or between the pommels.
Pommel Horse    |  2              |  D      |  100    |  Russian wendeswing with 1080° or more.
Pommel Horse    |  2              |  D      |  106    |  On the leather, Russian wendeswing with 1080° or more.
Pommel Horse    |  2              |  D      |  112    |  720° mel or between the pommels.
Pommel Horse    |  2              |  E      |  113    |  1080º Russian wendeswing or more on 1 pommel or between the pommels.
Pommel Horse    |  3              |  A      |  1      |  Circles with travel fwd. in side support (also with ¼ t.).
Pommel Horse    |  3              |  A      |  13     |  Circles with travel bwd. in side support.
Pommel Horse    |  3              |  B      |  2      |  Circles with travel fwd. in side support (3/3).
Pommel Horse    |  3              |  B      |  8      |  Circles with hop travel fwd. in side support.
Pommel Horse    |  3              |  B      |  14     |  Circles with travel bwd. in side support (3/3).
Pommel Horse    |  3              |  B      |  20     |  Circles with travel bwd. with hop.
Pommel Horse    |  3              |  C      |  3      |  Circles with travel fwd. in side support (3/3), hands between pommels.
Pommel Horse    |  3              |  C      |  9      |  Circles with hop tr. fwd. 2x in side support (3/3).
Pommel Horse    |  3              |  C      |  15     |  Circles with travel bwd. in side support (3/3), hands between pommels.
Pommel Horse    |  3              |  C      |  21     |  Circles with travel bwd. with hop 2x.
Pommel Horse    |  3              |  D      |  4      |  From side sup. on 1 end., travel fwd. over both p. to sup. on other end (3/3) in 1 circle.
Pommel Horse    |  3              |  D      |  10     |  From sup. frontways on one end, travel hop over both p. to sup. frontways on other end.
Pommel Horse    |  3              |  D      |  16     |  From side sup. on 1 end., travel bwd. over both p. to side sup. on the other end (3/3) in 2 circles w.
Pommel Horse    |  3              |  D      |  22     |  From side support on one end, travel hop over both p. to sup. frways on other end (1-2 to 4-5).
Pommel Horse    |  3              |  E      |  23     |  From side sup. beside the p., travel hop o. 2 p. to sup. fwd on other end (1-1 to 5-5).(Yamawaki)
Pommel Horse    |  3              |  B      |  26     |  All travels with ½ spindle in cross support (1/3 travel).½
Pommel Horse    |  3              |  B      |  32     |  Travel fwd. or bwd. with ¼ spindle to side support.
Pommel Horse    |  3              |  B      |  44     |  Travel fwd. in cross support (½ or 2/3).
Pommel Horse    |  3              |  C      |  27     |  All travels with ½ spindle in cross support (½ or 2/3 travel).½
Pommel Horse    |  3              |  C      |  33     |  All travels with ½ spindle in side support. ½
Pommel Horse    |  3              |  C      |  45     |  Travel fwd. in cross support with support on leather, pommel, pommel, leather(3/3) (1-2-4-5).
Pommel Horse    |  3              |  D      |  34     |  Cross travel fwd. 3/3 with ½ Spindle from one pommel over the other pommel.(Nin Reyes)
Pommel Horse    |  3              |  D      |  46     |  Any other travel fwd. in cross support to other end (3/3).(Magyar)
Pommel Horse    |  3              |  E      |  29     |  From an end side travel with 2x other end.
Pommel Horse    |  3              |  E      |  35     |  Travel 3/3 over both pommels with ½ Spindle.½ pívot.(Nin Reyes 2)
Pommel Horse    |  3              |  E      |  41     |  3/3 cross support travel fwd. with hop. (Driggs)
Pommel Horse    |  3              |  E      |  47     |  3/3 cross support travel fwd. in flairs.
Pommel Horse    |  3              |  A      |  55     |  Travel bwd. in cross sup. from one horse part or pommel to another (?).?
Pommel Horse    |  3              |  B      |  56     |  Travel bwd. in cross support (½ or 2/3).
Pommel Horse    |  3              |  C      |  51     |  Fr. cr. sup. on end, tr. fwd. in 2 circles to 12nd p., with ¼ turn to side sup. on other end (3/3(Bilozerchev)
Pommel Horse    |  3              |  C      |  57     |  Travel bwd. in cross sup with support on leather, pommel, pommel, leather(3/3) (5-4-2-1).
Pommel Horse    |  3              |  C      |  63     |  From support on end, kehr fwd. around 1Stöckli around 2nd p. to side sup., p. betw. hands. (Urzica)
Pommel Horse    |  3              |  D      |  58     |  Any other travel bwd. in cross support to other end (3/3).(Sivado)
Pommel Horse    |  3              |  D      |  64     |  p., rev. (Moguilny)Kehre fwd., rev. Stöckli, kehre fwd.
Pommel Horse    |  3              |  D      |  70     |  (Belenki)Kehre bwd., kehre fwd., kehre bwd.
Pommel Horse    |  3              |  E      |  59     |  Any other travel bwd. in cross support to other end (3/3) in flairs.
Pommel Horse    |  3              |  C      |  75     |  From sup. on 1 p., Russian wendeswing fwd. to other end without sup. on or btw. the p. (side to side support, side to cross support, cross to side support).
Pommel Horse    |  3              |  C      |  81     |  From side support pommel between hand, rus-sian wendeswing 360º with travel to the other end in side support.(Kroll)
Pommel Horse    |  3              |  D      |  76     |  From sup. on end, Russian wendeswing fwd. to other end without sup. on or btw. the p. (side to side support, side to cross, cross to side, cross to cross) with full circle after.
Pommel Horse    |  3              |  D      |  82     |  Any Russian wend. with 360(Tong Fei)(Roth)
Pommel Horse    |  3              |  D      |  88     |  Reverse Stöckli from cross support on one end to the other.
Pommel Horse    |  3              |  E      |  83     |  Any 3/3 travel in Russian type wendeswing with 720(Wu Guonian)
Pommel Horse    |  3              |  E      |  89     |  On the leather, from cross support, Russian wendeswing with 360° or 540º over both pom-mels. (Vammen)
Pommel Horse    |  4              |  A      |  1      |  Wende (from circle or flair).
Pommel Horse    |  4              |  B      |  2      |  Chaguinian to wende.
Pommel Horse    |  4              |  B      |  8      |  On the end, Russian wendeswing with 360°
Pommel Horse    |  4              |  B      |  14     |  Fr. s. sup. fw., wendeswing fwd. w. ½ t. to sup. fw. followed by Schwabenflank a. wende off.
Pommel Horse    |  4              |  B      |  20     |  Circle or flair through hdst. (also with ¾ t. with or without travel).
Pommel Horse    |  4              |  C      |  9      |  On the end, Russian wend. with 720°
Pommel Horse    |  4              |  C      |  15     |  DSA, rev. Stöckli or circle on one pommel through hdst.
Pommel Horse    |  4              |  C      |  21     |  Circle or flair with hop travel bwd. thr. hdst.
Pommel Horse    |  4              |  D      |  4      |  From side sup. on end, circle or flair to hdst. and travel 3/3 with 450° or more turn.(Kolyvanov)
Pommel Horse    |  4              |  D      |  10     |  On the end, Russian wendeswing with 1080º or more.
Pommel Horse    |  4              |  D      |  16     |  DSA with hop bwd. through hdst.
Pommel Horse    |  4              |  E      |  5      |  DSA to hdst. 3/3 with 450º or more turn.
Rings           |  1              |  A      |  1      |  Uprise fwd. to support.
Rings           |  1              |  A      |  7      |  Swing bwd in support, fall to bwd swing in hang.
Rings           |  1              |  A      |  13     |  From hang, underswing w. shoulders above rings.
Rings           |  1              |  B      |  8      |  #1 and counter salto fwd. to bwd swing in hang. (also from Li Ning).
Rings           |  1              |  B      |  20     |  From a hang or support, back toss to hang rw. to uprise fwd. to support.(Li Ning)(Li Ning 2)
Rings           |  1              |  A      |  25     |  From hang, felge upward to support.
Rings           |  1              |  A      |  31     |  Dislocate bwd. piked or stretched.
Rings           |  1              |  A      |  37     |  Uprise bwd. to support.
Rings           |  1              |  A      |  43     |  Inlocate piked or stretched.
Rings           |  1              |  B      |  26     |  Swing fwd. with straight arms through hdst.
Rings           |  1              |  B      |  32     |  Felge upward to support with straddled legs supported above the rings (2 s.).(Deltchev)
Rings           |  1              |  B      |  38     |  Uprise bwd. or giant swing piked or str. through handstand.
Rings           |  1              |  B      |  44     |  Backward swing to salto fwd. p. to support(Honma)
Rings           |  1              |  C      |  27     |  Tucked double felge bwd. to hang. (Guczoghy)
Rings           |  1              |  C      |  45     |  .Honma stretched.
Rings           |  1              |  D      |  28     |  Piked double felge bwd. to hang.
Rings           |  1              |  E      |  29     |  Stretched double felge bwd. to hang(O’Neill)
Rings           |  1              |  A      |  49     |  Slow inlocate from hang.
Rings           |  1              |  A      |  55     |  Kip to support.
Rings           |  1              |  A      |  61     |  Back kip to support.
Rings           |  1              |  A      |  67     |  Fwd. swing to swing bwd. in hang.
Rings           |  1              |  B      |  62     |  Back kip with straight arms to support.
Rings           |  1              |  B      |  68     |  Uprise bwd. to straddled L-sit (2 s.).
Rings           |  1              |  C      |  51     |  Double salto fwd. tucked to hang.(Yamawaki)
Rings           |  1              |  C      |  69     |  Bwd. swing, salto fwd tuck or piked to support.
Rings           |  1              |  D      |  52     |  Double salto fwd. piked or stretched to hang.(Jonasson)
Rings           |  1              |  A      |  73     |  From support or cross, felge bwd. piked or stretched to support.
Rings           |  1              |  B      |  80     |  Back kip or roll bwd str. to handstand (2 s.).
Rings           |  1              |  B      |  92     |  From support swing bwd. to handstand (2 s.).
Rings           |  1              |  C      |  81     |  Swing fwd. with straight arms to hdst. (2 s.).
Rings           |  1              |  C      |  87     |  Uprise bwd. or giant swing to handstand with straight arms (2 s.).
Rings           |  1              |  C      |  93     |  Honma and swing bwd. to handstand (2 s.).
Rings           |  1              |  D      |  94     |  Honma str. and swing bwd. to handstand (2 s.).
Rings           |  2              |  A      |  1      |  L-sit (2 s.) or straddled L-sit (2 s.).
Rings           |  2              |  A      |  7      |  Hanging scale rearways (back lever) (2 s.)
Rings           |  2              |  A      |  13     |  Hanging scale frontways (front lever) (2 s.).
Rings           |  2              |  B      |  2      |  V-sit (2 s.).
Rings           |  2              |  B      |  8      |  Support scale straddled (2 s.).
Rings           |  2              |  B      |  14     |  Any cross (2 s.).
Rings           |  2              |  C      |  3      |  Inverted cross (2 s.).
Rings           |  2              |  C      |  9      |  Support scale (planche)(2 s.).
Rings           |  2              |  C      |  15     |  V cross (2 s.).
Rings           |  2              |  D      |  4      |  Press from inverted cross to handstand (2 s.).
Rings           |  2              |  D      |  10     |  Support scale at ring height (swallow or maltese cross) (2 s.).(Hirondelle)
Rings           |  2              |  D      |  22     |  V Cross, press to V-sit (2 sec.). De cristo p. vert. subir a ángulo p. vert. (2 s.)(Tsukahara 3)
Rings           |  2              |  E      |  11     |  Inverted swallow (2 s.).
Rings           |  2              |  A      |  25     |  Press to hdst. with bent body and bent arms (2 s).- Also straddle legs.
Rings           |  2              |  A      |  31     |  Slow roll fwd. piked to support.
Rings           |  2              |  B      |  26     |  Press to hdst. with str. body a. bent arms or b. body. a. str. arms, or fr. strad. sup. lever (2 s.).
Rings           |  2              |  B      |  32     |  Slow roll fwd. stretched to support.
Rings           |  2              |  B      |  38     |  Slow roll bwd. slowly with str. arms and str. body to L sit (2 s.).
Rings           |  2              |  C      |  27     |  Press to hdst. with str. body and str. arms or from sup. lever (2 s.).
Rings           |  2              |  C      |  33     |  Slow roll fwd. stretched with straight arms to handstand (2 s.).
Rings           |  2              |  C      |  39     |  Slow roll fwd. stretched (bent or straight arms)to cross or L-cross (2 s.).
Rings           |  2              |  D      |  28     |  Press to hdst. with str. body and str. arms from swallow (2 s.).
Rings           |  2              |  D      |  34     |  Slow roll fwd. stretched with straight arms to inverted cross (2 s.).
Rings           |  2              |  D      |  40     |  Pull with straight arms and body through mo-mentary front lever to cross or L-cross (2 s.).(Pineda)
Rings           |  2              |  D      |  46     |  (Pham)
Rings           |  2              |  E      |  29     |  Pineda to inverted Cross (2 s.).(Petrounias)
Rings           |  2              |  E      |  41     |  Pineda to V cross (2 s.).(Tsukahara 2)
Rings           |  2              |  E      |  47     |  Pull with straight body and arms through mo-ment. front lever to swallow (2 s.).(Bhavsar)
Rings           |  2              |  B      |  50     |  Vertical pull up with bent arms to hanging scale rearways (2 s.).
Rings           |  2              |  B      |  56     |  Fr. cross or L-cr., turn fwd. to back lever (2 s.).
Rings           |  2              |  B      |  62     |  From hdst., lower horiz. to back lever (2 s.).
Rings           |  2              |  B      |  68     |  From handstand, lower slowly with straight arms through inverted cross to inverted hang.
Rings           |  2              |  C      |  51     |  Vertical pull up with straight arms to hanging scale rearways (2 s.)
Rings           |  2              |  C      |  57     |  Vertical pull up with straight arms to L-sit (2 s.)
Rings           |  2              |  C      |  63     |  From sup. or cross, lower slowly with str. arms to hang, and pull with str. arms to cross (2 s.).(Li Xiaoshuang)
Rings           |  2              |  D      |  52     |  Roll bwd. slowly with str. arms and body to cross or L-cross (2 s.).(Azarian)
Rings           |  2              |  D      |  58     |  From or through hanging scale rearways, with straight arms pull to cross or L-cross (2 s.).(Nakayama)
Rings           |  2              |  D      |  64     |  Vertical pull up with straight arms to cross or L-cross (2 s.).
Rings           |  2              |  D      |  70     |  From swallow, press to support scale (2 s.).
Rings           |  2              |  E      |  53     |  Azarian to V Cross (2 s.).(Tay)
Rings           |  2              |  E      |  59     |  Nakayama to V cross (2 s.).(NG Kiu Chung)
Rings           |  2              |  E      |  65     |  From planche, lower horiz. and slowly to hang-ing scale rw. and press to swallow (2 s.) or from swallow same to planche or planche to planche.(Van Gelder)
Rings           |  2              |  E      |  71     |  From swallow , lower slowly to handing scale, press to swallow (2 s.).
Rings           |  2              |  F      |  60     |  Through hanging scale rearways (no hold re-quired) pull with str. body through cross to inv. swallow (2 s.). (Zahran)
Rings           |  2              |  F      |  72     |  From hanging scale rw. press to swallow (also to Support Scale) (2 s.).(Zanetti)
Rings           |  2              |  C      |  75     |  From L-sit, press to inverted cross (2 s.).
Rings           |  2              |  C      |  81     |  From cross or L-cross, press to L-sit (2 s.
Rings           |  2              |  D      |  76     |  From L-cross, press to inverted cross (2 s.).
Rings           |  2              |  D      |  82     |  From support lever, press to inverted cross (2 s.).
Rings           |  2              |  D      |  88     |  From cross, press to planche without first going to support (2 s.).
Rings           |  2              |  D      |  94     |  From inverted cross lower slowly to inverted hang and felge bwd. slowly to cross (2 s.).(Vorobiov))
Rings           |  2              |  E      |  77     |  From cross, press with straight body to inverted cross (2 s.).
Rings           |  2              |  E      |  83     |  From swallow, press to inverted cross (2 s.).
Rings           |  2              |  E      |  89     |  From cross, press to swallow (2 s.).
Rings           |  2              |  E      |  95     |  From inverted cross lower slowly to inverted hang and felge bwd. slowly to swallow (2 s.).(Jotchev)
Rings           |  2              |  D      |  106    |  Slowly roll fwd. str. w. str. arms through Cross and press to planche without first going to support (2 s.).(Ng Kiu Chung 2)
Rings           |  2              |  D      |  112    |  Slow roll fwd. with str. body and arms to Cross or L-Cross (2 s.), also from inverted hang.(Davtyan)
Rings           |  2              |  E      |  101    |  Roll bwd. slowly with str. arms and body to free sup. scale (2 s.)(Yan Mijayoung)
Rings           |  2              |  E      |  107    |  From hang vertical pull up with straight arms to (Balandin 1)
Rings           |  2              |  E      |  119    |  Slow roll fwd. with straight body and arms through cross to inverted cross (2 s.).(Wynn)
Rings           |  2              |  F      |  102    |  Roll bwd. slowly with str. arms and body to swallow (2 s.).
Rings           |  2              |  F      |  108    |  Azarian to inverted Swallow (2 s.).(Tulloch)
Rings           |  2              |  F      |  114    |  Through hang rearways press with straight arms and straight body to inverted cross (2 s.).(Carmona)
Rings           |  2              |  F      |  120    |  From hang vertical pull up with straight arms to (2 s.).(Balandin 2)
Rings           |  3              |  B      |  2      |  Uprise fwd. to L-sit, (2 s.).
Rings           |  3              |  B      |  8      |  Kip to L-sit (2 s.).
Rings           |  3              |  B      |  14     |  Backward swing to salto fwd. p. to L-sit (2 s.).(Honma)
Rings           |  3              |  C      |  3      |  Uprise fwd. to V-sit (2 s.).
Rings           |  3              |  C      |  9      |  Kip to V-sit (2 s.).
Rings           |  3              |  D      |  16     |  Salto fwd. betw. rings direc. to cross / L-cross (2 s.).
Rings           |  3              |  D      |  22     |  Bwd. swing, salto fwd p. to cross or L- cross (2 s.).
Rings           |  3              |  E      |  17     |  Salto fwd. between rings directly to V cross (2 s.).(Tanaka)
Rings           |  3              |  C      |  27     |  Uprise fwd. to cross or L-cross (2 s.).
Rings           |  3              |  C      |  33     |  Uprise bwd. to cross or L-cross (2 s.).
Rings           |  3              |  C      |  39     |  Li Ning or Li Ning 2 to cross or L-cross (2 s.).
Rings           |  3              |  C      |  45     |  Felge upward to cross or L-cross (2 s.).
Rings           |  3              |  D      |  40     |  (Tsukahara) Li Ning or Li Ning 2 to V Cross (2 s.).
Rings           |  3              |  D      |  46     |  Kip to V cross (2 s.).(Molinari)
Rings           |  3              |  E      |  47     |  Felge upward to sup. scale at ring height (2 s.).
Rings           |  3              |  F      |  48     |  Uprise fwd. to inv. swallow w.o. supp. phase (2 s.).(Rodrigues)
Rings           |  3              |  C      |  51     |  Kip to cross, or L-cross (2 s.).
Rings           |  3              |  C      |  57     |  Back kip to cross or L-cross (2 s.).
Rings           |  3              |  C      |  63     |  Felge upward to support scale straddled (2 s.).
Rings           |  3              |  C      |  69     |  Uprise bwd. to support scale straddled (2 s.).
Rings           |  3              |  D      |  52     |  Back Uprise to V Cross (2 s.).(Kato)
Rings           |  3              |  D      |  64     |  Felge upward to support scale (2 s.).
Rings           |  3              |  D      |  70     |  Uprise bwd. to support scale (2 s.).
Rings           |  3              |  E      |  53     |  Uprise bwd. to sup. scale at ring height (2 s.).
Rings           |  3              |  E      |  59     |  Back kip to support scale at ring height (2 s.).
Rings           |  3              |  F      |  54     |  Kip to inverted swallow (2 s.).
Rings           |  3              |  C      |  75     |  Back kip to support scale straddled (2 s.).
Rings           |  3              |  D      |  76     |  Back kip to support scale (2 s.).
Rings           |  3              |  D      |  82     |  Felge bwd. stretched to free sup. scale (2 s.).
Rings           |  3              |  D      |  88     |  Felge upward with straight arms to invert. cross (2 s.).
Rings           |  3              |  D      |  94     |  Uprise bwd. to inverted cross (2 s.).
Rings           |  3              |  D      |  100    |  Back kip to inverted cross (2 s.).
Rings           |  4              |  A      |  1      |  Salto fwd. piked or stretched.
Rings           |  4              |  A      |  19     |  Uprise bwd. and salto bwd t.
Rings           |  4              |  B      |  2      |  Salto fwd. piked or stretched with ½ t.
Rings           |  4              |  B      |  20     |  Uprise bwd. and salto bwd p. or str.(Köste)
Rings           |  4              |  C      |  3      |  Salto fwd. piked or stretched with 1/1 or 3/2 t.
Rings           |  4              |  C      |  9      |  Double salto fwd. tucked or tucked with ½ t.
Rings           |  4              |  C      |  21     |  Uprise bwd. and salto bwd str. with 1/1 t.
Rings           |  4              |  D      |  4      |  Salto fwd. piked or stretched with 2/1 t.
Rings           |  4              |  D      |  10     |  Double salto fwd. tucked with 3/2 t (also 1/1 t.).(Fischer)
Rings           |  4              |  D      |  16     |  Double salto fwd. piked or piked with ½ t.(Balabanov)
Rings           |  4              |  E      |  17     |  Double salto fwd. piked with 3/2 t. (also 1/1 t.).
Rings           |  4              |  A      |  25     |  Salto bwd. piked or stretched.
Rings           |  4              |  B      |  26     |  Salto bwd. stretched with ½ or 1/1 t.
Rings           |  4              |  B      |  32     |  Double salto bwd. tucked or piked.
Rings           |  4              |  C      |  27     |  Salto bwd. stretched with 2/1 t. or 3/2 t.
Rings           |  4              |  C      |  33     |  Double salto bwd. stretched.
Rings           |  4              |  C      |  39     |  ½ ou Double salto bwd. t. with ½ or 1/1 t.½ o
Rings           |  4              |  C      |  45     |  Salto bwd. str. with 1/1 t. and salto t.
Rings           |  4              |  D      |  40     |  Double salto bwd. t. with 3/2 t.
Rings           |  4              |  D      |  46     |  Double salto bwd. stretched with ½ or 1/1 t.
Rings           |  4              |  E      |  29     |  Salto bwd. stretched with 3/1 t.
Rings           |  4              |  E      |  41     |  Double salto bwd. t. with 2/1 t.
Rings           |  4              |  G      |  36     |  Triple salto bwd. tucked.
Rings           |  4              |  F      |  42     |  (Tuuha)Double salto bwd. t. with 5/2 t.
Rings           |  4              |  F      |  48     |  Double salto bwd. stretched with 3/2 or 2/1 t.
Vault           |  1              |  1.6    |  101    |  Forward handspring.
Vault           |  1              |  2.4    |  107    |  Handspring fwd. and salto fwd. t.
Vault           |  1              |  3.2    |  113    |  Hdspr. fwd. and salto fwd. p. w. ½ t. (Cuervo p.).
Vault           |  1              |  1.8    |  102    |  Forward handspring with ½ t.
Vault           |  1              |  2.8    |  108    |  Hdspr. fwd. and salto fwd. t. w. ½ t. (or Cuervo t.).
Vault           |  1              |  3.6    |  114    |  Hdspr. fwd. and salto fwd. p. w. 1/1 t. (Cuervo p. w. ½ t.).
Vault           |  1              |  2      |  103    |  Forward handspring with 1/1 t.
Vault           |  1              |  3.2    |  109    |  Hdspr. fwd. and salto fwd. t. w. 1/1 t. (Cuervo t. w. ½ t.).
Vault           |  1              |  4      |  115    |  Hdspr. fwd. and salto fwd. p. w. 3/2 t. (Cuervo p. w. 1/1 t.).
Vault           |  1              |  2.2    |  104    |  Forward handspring with 3/2 t.
Vault           |  1              |  4      |  110    |  (Kroll)Hdspr. fwd. and salto fwd. t. w. 3/2 t. (Cuervo t. w. 1/1 t.).
Vault           |  1              |  4      |  116    |  Hdspr. fwd. w. 1/1 t. a. salto fwd. t.(Behrend)
Vault           |  1              |  2.4    |  105    |  Forward handspring with 2/1 t.
Vault           |  1              |  4.4    |  111    |  (Canbas)Hdspr. fwd. and salto fwd. t. w. 2/1 t. (or Cuervo t. w. 3/2 t.).
Vault           |  1              |  4.4    |  117    |  Hdspr. fwd. w. 1/1 t. and salto fwd. p.(Rehm)
Vault           |  1              |  2.6    |  106    |  Forward handspring with 5/2 t.(Tsygankov)
Vault           |  1              |  2.8    |  112    |  Handspring fwd. and salto fwd. piked.
Vault           |  1              |  4.8    |  118    |  Hdspr. fwd. 1/1 t. and Salto fwd piked ½ t.½ g.(Arican)
Vault           |  1              |  3.6    |  171    |  Handspring fwd. and salto fwd. str.
Vault           |  1              |  6      |  177    |  Handspring fwd. and salto fwd. str. w. 3/1 t.
Vault           |  1              |  4      |  172    |  Hdspr. fwd. and salto fwd. str. w. ½ t. (Cuervo str.).
Vault           |  1              |  5.2    |  178    |  (Roche)Handspring fwd. and dbl. salto fwd. t.
Vault           |  1              |  5.6    |  190    |  Handspring fwd. and salto fwd. t. w. ½ t. and salto bwd. t.(Zimmerman)
Vault           |  1              |  4.4    |  173    |  Hdspr. fwd. and salto fwd. str. w. 1/1 t. (Cuervo str. ½ t.).
Vault           |  1              |  5.6    |  179    |  (Dragulescu)Roche with ½ turn.
Vault           |  1              |  5.6    |  191    |  (Blanik)Handspring fwd. and dbl. salto fwd. piked.
Vault           |  1              |  4.8    |  174    |  Hdspr. fwd. and salto fwd. str. w. 3/2 t. (Cuervo str. w. 1/1 t.).
Vault           |  1              |  6      |  192    |  (RI Se Gwang 2)Dragulescu piked.
Vault           |  1              |  5.2    |  175    |  Hdspr. fwd. and salto fwd. str. w. 2/1 t. (Cuervo str. 3/2 t.).
Vault           |  1              |  5.6    |  176    |  (Yeo 2) Handspring fwd. and salto fwd. str. w. 5/2 t.
Vault           |  2              |  1.6    |  220    |  Handspring sw. with ¼ t.
Vault           |  2              |  2.4    |  226    |  Tsukahara piked.
Vault           |  2              |  1.8    |  221    |  Handspring sw. with 3/4 t.
Vault           |  2              |  2.4    |  227    |  Tsukahara t. with ½ t.
Vault           |  2              |  2      |  222    |  Handspring sw. with 5/4 t.
Vault           |  2              |  2.8    |  228    |  Hdspr. sw. w. ¼ t. a. salto fwd. t. w. ½ t. or Tsuk. t. w. 1/1 t.(Kasamatsu)
Vault           |  2              |  2.4    |  223    |  Hdspr. sw. with. ¼ t. a. salto fwd. t.
Vault           |  2              |  3.2    |  229    |  Tsukahara t. w. 3/2 t.or Kasamatsu t. ½ t
Vault           |  2              |  2.8    |  224    |  Handspring sw. w. ¼ t. a. salto fwd. p.
Vault           |  2              |  4      |  230    |  Tsukahara t. with 2/1 t.(Barbieri)
Vault           |  2              |  2.2    |  225    |  Handspring sw. w. ¼ t. a. salto bwd. t.(Tsukahara)
Vault           |  2              |  3.2    |  270    |  Tsukahara stretched.
Vault           |  2              |  5.6    |  276    |  Kasamatsu str. with 2/1 t.
Vault           |  2              |  3.6    |  271    |  Tsukahara str. with ½ t. or Hdspr. sw ¼ t. salto fwd str.
Vault           |  2              |  6      |  277    |  Kasamatsu str. with 5/2 t. or Tsukahara st. with 7/2 t.(López)
Vault           |  2              |  4      |  272    |  Tsukahara str. w. 1/1 t.
Vault           |  2              |  4.4    |  273    |  Kasamatsu str. with ½ t. or Tsukahara str. w. 3/2 t.
Vault           |  2              |  5.2    |  285    |  Tsukahara with salto bwd. t.(Yeo)
Vault           |  2              |  4.8    |  274    |  Kasamatsu str. w. 1/1 t. or Tsukahara str. w. 2/1 t.(Akopian)
Vault           |  2              |  5.6    |  286    |  Tsukahara with salto bwd. piked.(Lu Yu Fu)
Vault           |  2              |  5.2    |  275    |  Kasamatsu str. with 3/2 t. (Driggs)
Vault           |  2              |  6      |  287    |  Double Tsukahara with 1/1 twist.(Ri Se Gwang)
Vault           |  3              |  1.6    |  335    |  Round off, handspring bwd.
Vault           |  3              |  3.2    |  341    |  Yurchenko t. with 3/2 t.
Vault           |  3              |  1.8    |  336    |  Round off, handspring bwd. with ½ turn.
Vault           |  3              |  4      |  342    |  Yurchenko t. with 2/1 t.
Vault           |  3              |  2      |  337    |  Round off, handspring bwd. with 1/1 turn.
Vault           |  3              |  2.4    |  343    |  Yurchenko piked.
Vault           |  3              |  2.2    |  338    |  Round off, hdspr. bwd. and salto bwd. t.(Yurchenko)
Vault           |  3              |  2.4    |  339    |  Yurchenko t. with ½ t.
Vault           |  3              |  2.8    |  340    |  Yurchenko t. with 1/1 t.
Vault           |  3              |  3.2    |  370    |  Yurchenko stretched.
Vault           |  3              |  5.6    |  376    |  Yurchenko Stretched 3/1 t. (Shirai - KIM Hee Hoon)
Vault           |  3              |  3.6    |  371    |  Yurchenko stretched with ½ t.
Vault           |  3              |  4      |  372    |  Yurchenko stretched with 1/1 t.
Vault           |  3              |  4.4    |  373    |  Yurchenko stretched with 3/2 t.
Vault           |  3              |  5.2    |  385    |  Yurchenko and salto bwd. t.(Melissanidis)
Vault           |  3              |  4.8    |  374    |  Yurchenko stretched with 2/1 t.
Vault           |  3              |  5.6    |  386    |  Melissanidis piked.
Vault           |  3              |  5.2    |  375    |  Yurchenko stretched with 5/2 t.(Shewfelt)
Vault           |  4              |  3.4    |  456    |  Round off, ½ t. and hdspr. fwd. and salto fwd. p. with ½ t.
Vault           |  4              |  2      |  451    |  Round off, ½ t. and hdspr. fwd. with ½ t.
Vault           |  4              |  3.4    |  456    |  Round off, ½ t. and hdspr. fwd. and salto fwd. p. with ½ t. (Nemov)
Vault           |  4              |  2.2    |  452    |  Round off, ½ t. and hdspr. fwd. with 1/1 t.
Vault           |  4              |  2.6    |  453    |  Round off, ½ t. and hdspr. fwd. and salto fwd. tucked.
Vault           |  4              |  3.8    |  471    |  Round off, ½ t. and hdspr. fwd. and salto fwd. str.
Vault           |  4              |  3      |  454    |  Round off, ½ t. and hdspr. fwd. and salto fwd. tucked with ½ t.
Vault           |  4              |  4.2    |  472    |  Round off, ½ t. and hdspr. fwd. and salto fwd. str. with ½ t.
Vault           |  4              |  3      |  455    |  Round off, ½ t. a. hdspr. fwd. and salto fwd. p.
Vault           |  4              |  4.6    |  473    |  Round off, ½ t. and hdspr. fwd. and salto fwd. str. with 1/1 t.
Vault           |  4              |  5      |  474    |  Round off, ½ t. and hdspr. fwd. and salto fwd. stretched with 3/2 t.
Vault           |  4              |  5.4    |  475    |  Round off, ½ t. and hdspr. fwd. and salto fwd. stretched with 2/1 t.
Vault           |  4              |  5.8    |  476    |  Round off, ½ t. and hdspr. fwd. and salto fwd. str. with 5/2 t.(Li Xiao Peng)
Vault           |  4              |  5.4    |  478    |  Round off, ½ t. a. hdspr. fwd. and double salto fwd. tucked.
Vault           |  5              |  2.2    |  560    |  Scherbo entry to back handspring.
Vault           |  5              |  3.4    |  566    |  Scherbo entry to salto bwd. tucked with 1/1 turn.
Vault           |  5              |  4.6    |  572    |  Scherbo with 1/1 t.
Vault           |  5              |  2.4    |  561    |  Scherbo entry to back handspring with ½ turn.
Vault           |  5              |  3.8    |  567    |  Scherbo entry to salto bwd. tucked with 3/2 turn.
Vault           |  5              |  5      |  573    |  Scherbo with 3/2 t.
Vault           |  5              |  2.6    |  562    |  Scherbo entry to back handspring with 1/1 turn.
Vault           |  5              |  5.4    |  574    |  Scherbo with 2/1 t.
Vault           |  5              |  2.8    |  563    |  Scherbo entry to salto bwd. tucked.
Vault           |  5              |  5.8    |  575    |  Scherbo with 5/2 t.
Vault           |  5              |  3      |  564    |  Scherbo entry to salto bwd. piked.
Vault           |  5              |  3.8    |  570    |  Scherbo entry to salto bwd. stretched.(Scherbo)
Vault           |  5              |  3      |  565    |  Scherbo entry to salto bwd. tucked with ½ turn.
Vault           |  5              |  4.2    |  571    |  Scherbo with ½ t.
Parallel Bars   |  1              |  A      |  1      |  Any handstand on 1 or 2 rails (2 s.).
Parallel Bars   |  1              |  A      |  7      |  Any L-sit on 1 or 2 rails (2 s.).
Parallel Bars   |  1              |  A      |  13     |  Straddle cut fwd. to support or L-sit (2 s.).
Parallel Bars   |  1              |  A      |  19     |  Straddle cut bwd. to support.
Parallel Bars   |  1              |  B      |  2      |  Bent arm swing fwd. to hop ½ t. to sup.(Kato)
Parallel Bars   |  1              |  B      |  8      |  Swing fwd. w. 1/1 t. to up. arm hang.(Carminucci)
Parallel Bars   |  1              |  B      |  14     |  Straddle cut bwd. to hdst.
Parallel Bars   |  1              |  B      |  20     |  Strad. cut bwd. and salto fwd. to up. arm hang.
Parallel Bars   |  1              |  C      |  3      |  Stützkehr fwd. to hdst.(to 1 or 2 bars).
Parallel Bars   |  1              |  C      |  15     |  Diamidov and ½ turn to upper arms.(Salazar)
Parallel Bars   |  1              |  C      |  21     |  Swing fwd. w. 1/1 t. on 1 arm to hdst.(Diamidov)
Parallel Bars   |  1              |  D      |  10     |  Stützkehr fwd. or salto bwd. to hdst. sideways on 1 rail (also with additional ¼ or ¾ turn to hdst.).(Bilozerchev - Peters)
Parallel Bars   |  1              |  D      |  16     |  ¾ Diamidov and rear vault to side hang on 1 bar.(De Freitas)
Parallel Bars   |  1              |  D      |  22     |  Diamidov with ½
Parallel Bars   |  1              |  B      |  26     |  Any press w. bent arm str. body, or str. arm bent body to hdst., on 1 or 2 rails (2 s.) also straddled.
Parallel Bars   |  1              |  B      |  32     |  Swing fwd. to hdst., hop to support.(Carballo)
Parallel Bars   |  1              |  C      |  27     |  Makuts to upper arm hang or ¾ Diamidov ¼ Healy to support.
Parallel Bars   |  1              |  C      |  33     |  Salto bwd to handstand. Also to one rail.
Parallel Bars   |  1              |  C      |  45     |  Salto bwd. with ½ t. to up. arm hang.(Toumilovich)
Parallel Bars   |  1              |  D      |  28     |  Swing forward with 5/4 t. on one arm through-hdst. and healy to up. arm.
Parallel Bars   |  1              |  D      |  34     |  Salto backward with straddle cut to support.
Parallel Bars   |  1              |  D      |  40     |  Salto bwd to handstand 1 rail (connected to Healy type element).(Rumbutis)
Parallel Bars   |  1              |  D      |  46     |  Double salto t. to up. arm hang.(Morisue)
Parallel Bars   |  1              |  E      |  29     |  ¾ Diamidov & ¾ Healy on the other hand to supp.(Makuts)
Parallel Bars   |  1              |  E      |  47     |  Double salto p. to up. arm hang.(Huang Liping)
Parallel Bars   |  1              |  F      |  30     |  Swing forward with 5/4 t. on one arm through hdst. and healy to support.(Zonderland)
Parallel Bars   |  1              |  B      |  50     |  Hdst. with ¼ t. and fall back to sup. with ¼ t.
Parallel Bars   |  1              |  B      |  62     |  Stützkehr bwd. to support.
Parallel Bars   |  1              |  B      |  68     |  Healy to upper arm hang.
Parallel Bars   |  1              |  C      |  51     |  (Brändström)Hdst. with ¾ t. and fall back to sup. with ¼ t.
Parallel Bars   |  1              |  C      |  57     |  Stützkehr bwd. with straddle cut bwd. to sup.
Parallel Bars   |  1              |  C      |  63     |  Stützkehr bwd. through hdst. to support.(Novikov)
Parallel Bars   |  1              |  C      |  69     |  From hdst. on 1 rail, Healy to upper arm hang.
Parallel Bars   |  1              |  D      |  52     |  (Suarez)3/2 salto bwd. with ½ t. to up. arm hang.
Parallel Bars   |  1              |  D      |  70     |  Healy to support (also from hdst. on 1 rail).(Healy)
Parallel Bars   |  1              |  E      |  71     |  Following a swing element (min. B) to hdst on 1 rail, Healy (360° or more) to support.
Parallel Bars   |  1              |  A      |  79     |  Any hdst. with ½ turn fwd. (also with 2 s.).
Parallel Bars   |  1              |  A      |  85     |  ½ turn bwd. in handstand (also with 2 s.).
Parallel Bars   |  1              |  B      |  74     |  Swing bwd. with ½ t. hop to hdst.
Parallel Bars   |  1              |  B      |  80     |  Any 1/1 pirouette in hdst. on 2 rails.
Parallel Bars   |  1              |  B      |  86     |  From hdst. on 1 rail, ½ or ¾ pir. fwd. or bwd. in hdst.
Parallel Bars   |  1              |  C      |  75     |  Swing bwd. with ¾ t. hop to hdst.
Parallel Bars   |  1              |  C      |  93     |  From hdst., salto fwd to support or from hdsd. with rotated grip, inlocate to support.
Parallel Bars   |  1              |  D      |  76     |  Swing bwd. with 1/1 t. hop to hdst. (Gatson 1)
Parallel Bars   |  1              |  E      |  77     |  Gatson 1 with ¼ t to hdst. on 1 rail and ¼ t. hdst. on 2 rails.(Gatson 2)
Parallel Bars   |  1              |  E      |  95     |  5/4 salto fwd. strad. through support to hang or directly to hang.(Lee Chul Hon/Sasaki)
Parallel Bars   |  1              |  A      |  115    |  On end, 1 circle or flair.
Parallel Bars   |  1              |  B      |  98     |  5/4 salto fwd. t. or p. to upper arm hang.
Parallel Bars   |  1              |  B      |  104    |  Salto fwd. t. or p. with ¼ t. to hang on 1 rail.
Parallel Bars   |  1              |  B      |  116    |  In center or on end facing out, 1 circle or flair.
Parallel Bars   |  1              |  C      |  99     |  Salto fwd to support.
Parallel Bars   |  1              |  C      |  105    |  Salto fwd. t. or p. to hang at the end of the bars.
Parallel Bars   |  1              |  C      |  111    |  5/4 salto forward str. to upper arm hang
Parallel Bars   |  1              |  C      |  117    |  On end, Russian wende swing (360°).(Delesalle)
Parallel Bars   |  1              |  D      |  100    |  5/4 salto fwd. straddled to up. arm hang.
Parallel Bars   |  1              |  D      |  106    |  Double salto fwd. t. to up. arm hang.
Parallel Bars   |  1              |  E      |  101    |  5/4 salto fwd. strad. to bent arm sup.
Parallel Bars   |  1              |  E      |  107    |  Double salto fwd. p. to up. arm hang.
Parallel Bars   |  1              |  E      |  113    |  (Urzica)Salto fwd. with 1/1 t. to up. arm hang.
Parallel Bars   |  1              |  C      |  123    |  Any flair to hdst.
Parallel Bars   |  1              |  C      |  129    |  Any flair with ½ t. to hdst.
Parallel Bars   |  2              |  A      |  1      |  Forward uprise to support.
Parallel Bars   |  2              |  A      |  7      |  Fwd. uprise with ¼ t. to hang on 1 rail.
Parallel Bars   |  2              |  B      |  2      |  Fwd. uprise and straddle cut bwd to handstand.
Parallel Bars   |  2              |  B      |  8      |  Roll bwd. with ½ t. from up. arm. hang uprise to Kato hop to sup.(Watanabe)
Parallel Bars   |  2              |  B      |  14     |  Roll bwd to handstand with straight arms.
Parallel Bars   |  2              |  B      |  20     |  Salto bwd. with strad. cut to up. arm hang
Parallel Bars   |  2              |  C      |  21     |  Roll bwd. with strad. cut to support.
Parallel Bars   |  2              |  E      |  5      |  Fwd. uprise with ½ t. to handstand.
Parallel Bars   |  2              |  E      |  11     |  Fwd. uprise to Makuts to upper arm.
Parallel Bars   |  2              |  E      |  17     |  Fwd. uprise with 1/1 t. to handstand.(Richards)
Parallel Bars   |  2              |  E      |  23     |  Roll bwd with salto bwd tuck to upper arm hang.(Dimitrenko)
Parallel Bars   |  2              |  G      |  12     |  Fwd. uprise to Makuts to support.(Tsolakidis 1)
Parallel Bars   |  2              |  F      |  18     |  Fwd. uprise with 3/2 t. to handstand.(Tsolakidis 2)
Parallel Bars   |  2              |  F      |  24     |  Roll bwd with salto bwd piked to upper arm hang.(Li Xiaopeng)
Parallel Bars   |  2              |  B      |  32     |  Bwd. uprise to handstand (or w. ½ t).
Parallel Bars   |  2              |  B      |  38     |  Bwd. uprise with ½ t. and straddle cut bwd to upper arm hang.
Parallel Bars   |  2              |  B      |  44     |  Bwd. uprise with ½ t. to support.
Parallel Bars   |  2              |  C      |  33     |  Bwd. uprise with ½ t. hop to handstand.
Parallel Bars   |  2              |  C      |  39     |  Bwd. uprise with ½ t. a. strad. cut bwd. to sup.
Parallel Bars   |  2              |  C      |  45     |  Bwd. uprise and 5/4 salto fwd. t., p. or strad. to up.arm hang.(Yamawaki)
Parallel Bars   |  2              |  D      |  28     |  Roll bwd. with ½ t. tuck to upper arm hang.. agrupado al apoyo bra-quial.(Harada)
Parallel Bars   |  2              |  D      |  34     |  Bwd. uprise with ¾ t. hop to hdst. on 1 rail.
Parallel Bars   |  2              |  D      |  46     |  Bwd. uprise and salto fwd. p. to sup.
Parallel Bars   |  2              |  E      |  29     |  Roll bwd. with ½ t. tuck to hang.. agrupado a la suspensión.(Dalton)
Parallel Bars   |  2              |  E      |  47     |  Bwd. uprise and double salto fwd. t. to up arm hang.
Parallel Bars   |  2              |  A      |  55     |  Bwd. uprise and strad. cut or flank over to sup.
Parallel Bars   |  2              |  B      |  56     |  Bwd. uprise and strad. cut or flank over to sup.
Parallel Bars   |  2              |  E      |  53     |  Bwd. uprise and 5/4 salto fwd. straddled to up. Arm hang.
Parallel Bars   |  3              |  B      |  8      |  Moy piked with stradd. cut bwd. and ½ t. to up. arm hang (also legs together).
Parallel Bars   |  3              |  B      |  14     |  Moy to support bent legs (also without grip release).
Parallel Bars   |  3              |  C      |  3      |  Swing forward, straddle cut backward, and regrasp with straight body at horizontal to bent and upper arm.
Parallel Bars   |  3              |  C      |  9      |  Moy piked with 1/1 t. to up. arm hang.(Nolet)
Parallel Bars   |  3              |  C      |  15     |  (Moy)Moy to support str. legs (also without grip release).
Parallel Bars   |  3              |  C      |  21     |  Giant swing bwd. to hdst. or with inlocation fwd. (also with ¼ or ½ turn and to one rail).
Parallel Bars   |  3              |  D      |  4      |  Moy piked with straddle bwd to hdst.(Tippelt)
Parallel Bars   |  3              |  D      |  10     |  Moy and salto fwd. T., p. Or strad. To upper arm hang. (Giraldo)
Parallel Bars   |  3              |  D      |  22     |  Giant swing bwd. to hdst. on one rail (connected to Healy type element).(Piasecky)
Parallel Bars   |  3              |  E      |  5      |  Swing forward, straddle cut backward, and regrasp with straight body at horizontal.(Bhavsar)
Parallel Bars   |  3              |  B      |  32     |  Swing down with salto bwd. str. to hang.
Parallel Bars   |  3              |  B      |  44     |  Giant swing bwd. w. strad. cut to up. arm hang.
Parallel Bars   |  3              |  C      |  33     |  Giant swing bwd. with ½ t. to up. arm hang.½ (Gushiken)
Parallel Bars   |  3              |  D      |  28     |  Giant swg. bwd. with Diamidov to hdst., also to one rail.
Parallel Bars   |  3              |  D      |  34     |  Giant swing bwd. with ½ t. to support.½ (Marinitch)
Parallel Bars   |  3              |  D      |  40     |  Giant swing bwd. with Makuts to upper hang.(Dauser)
Parallel Bars   |  3              |  D      |  46     |  (Korolev)Giant swing bwd. with straddle cut to support or bent arms support.
Parallel Bars   |  3              |  E      |  29     |  or ½ Giant swg. Diamidov with ¼ or ½ t. to hdst. or ½
Parallel Bars   |  3              |  E      |  35     |  Giant swg. bwd. with Diamidov to hdst. one rail (connected to Healy type element).
Parallel Bars   |  3              |  E      |  47     |  Giant swing bwd. with ½ t. and str. cut bwd. to up. arms.(Sosa)
Parallel Bars   |  3              |  G      |  36     |  Belle with 1/1 turn.(Quintero)
Parallel Bars   |  3              |  A      |  61     |  Glide kip
Parallel Bars   |  3              |  B      |  62     |  Glide kip. with 1/2 t. to support.
Parallel Bars   |  3              |  B      |  68     |  Glide kip to strad. cut bwd. hdst. on 1 or 2 r.
Parallel Bars   |  3              |  C      |  57     |  (Chartrand)Giant swing bwd. and salto with ½ t to hang on the end.
Parallel Bars   |  3              |  C      |  63     |  Glide kip bwd. to hdst.
Parallel Bars   |  3              |  D      |  52     |  (Belle)
Parallel Bars   |  3              |  D      |  58     |  Giant swing bwd. and salto with ½ t or p. to up. arm hang or hang.
Parallel Bars   |  3              |  E      |  53     |  Belle piked.
Parallel Bars   |  3              |  E      |  59     |  (Torres)Giant swing bwd. and salto with ½ t or p. to support.
Parallel Bars   |  3              |  E      |  65     |  Giant swing bwd. and salto with ½ str to up. arm hang.(Fokin)
Parallel Bars   |  3              |  F      |  60     |  (Tanaka)Giant swing bwd. with ½ t. and 3/2 salto fwd to up arm hang.
Parallel Bars   |  3              |  B      |  74     |  Glide kip one rail through L-sit strad. to hdst.
Parallel Bars   |  3              |  B      |  80     |  (Li Donghua)
Parallel Bars   |  3              |  C      |  75     |  Glide kip through L-sit p. to hdst.
Parallel Bars   |  3              |  D      |  76     |  Glide kip through L-sit p.to hdst. and hop with 3/4 t or more.
Parallel Bars   |  3              |  A      |  97     |  Cast to upper arm hang.
Parallel Bars   |  3              |  A      |  115    |  Basket with travel to hang
Parallel Bars   |  3              |  B      |  98     |  Cast to support.
Parallel Bars   |  3              |  B      |  104    |  Cast with ½ t. to up. arm hang.
Parallel Bars   |  3              |  B      |  116    |  Basket to support
Parallel Bars   |  3              |  C      |  99     |  Felge with ½ t. to upper arm hang.
Parallel Bars   |  3              |  C      |  105    |  Cast with ½ t. to support.
Parallel Bars   |  3              |  C      |  111    |  Cast to straddle cut backward to handstand.(Arican)
Parallel Bars   |  3              |  C      |  117    |  Basket with immed. straddle cut to support.
Parallel Bars   |  3              |  D      |  100    |  Felge with ½ t. to rear support.
Parallel Bars   |  3              |  D      |  106    |  Basket to handstand or with inlocation (el-grip) and hop to hdst. Also to one rail.
Parallel Bars   |  3              |  E      |  107    |  Basket with ¼, ¾ or ½ t. to handstand.
Parallel Bars   |  3              |  E      |  119    |  Basket to one rail hdst. (connected to Healy type element).(Chiarlo)
Parallel Bars   |  3              |  F      |  114    |  Basket with 1/1 t. to handstand.(Teng Hai Bin)
Parallel Bars   |  3              |  G      |  108    |  Basket with 5/4 t. to handstand.(Zhou Shixiong)
Parallel Bars   |  3              |  G      |  120    |  Basket through handstand to Makuts. (Yamamuro)
Parallel Bars   |  3              |  A      |  121    |  Basket forward to support.
Parallel Bars   |  3              |  B      |  122    |  Basket forward with ½ t. to support.
Parallel Bars   |  3              |  B      |  128    |  Shoot up to hdst. and hop to other rail.
Parallel Bars   |  3              |  D      |  130    |  Shoot up with ¼ t. to hdst.
Parallel Bars   |  3              |  D      |  136    |  Straddled shoot to hdst on 1 rail.
Parallel Bars   |  3              |  E      |  125    |  (Tejada)Basket with salto bwd t. to up. arm hang.
Parallel Bars   |  4              |  A      |  1      |  Salto fwd. piked or stretched.
Parallel Bars   |  4              |  A      |  19     |  Salto bwd. piked or str.
Parallel Bars   |  4              |  B      |  2      |  Salto fwd. piked or str. with ½ t.
Parallel Bars   |  4              |  B      |  20     |  Salto bwd. piked or str. with ½ t.
Parallel Bars   |  4              |  C      |  3      |  Salto fwd. piked or str. with 1/1 or 3/2 t.
Parallel Bars   |  4              |  C      |  9      |  Double salto fwd. t. from end.
Parallel Bars   |  4              |  C      |  21     |  Salto bwd. piked or str. with 1/1 or 3/2 t.
Parallel Bars   |  4              |  D      |  4      |  Salto fwd. piked or str. with 2/1 or 5/2 t.
Parallel Bars   |  4              |  D      |  22     |  Salto bwd. str. with 2/1 t.(Kan)
Parallel Bars   |  4              |  E      |  5      |  Double salto fwd. t.
Parallel Bars   |  4              |  F      |  6      |  Double salto fwd. piked.(Belyavskiy)
Parallel Bars   |  4              |  F      |  12     |  Double salto fwd. t. w. ½ t. or ½ t. doub. salt. bwd.
Parallel Bars   |  4              |  G      |  18     |  Double salto fwd. piked with ½ t.
Parallel Bars   |  4              |  G      |  24     |  Double salto fwd. tucked with 1/1 t.(Larduet)
Parallel Bars   |  4              |  A      |  43     |  From hang on end, salto bwd. stretched.
Parallel Bars   |  4              |  B      |  32     |  Double salto bwd. t. from end.
Parallel Bars   |  4              |  B      |  44     |  From hang on end, double salto bwd. t.
Parallel Bars   |  4              |  C      |  33     |  Double salto bwd. t.
Parallel Bars   |  4              |  C      |  45     |  From hang on end, dbl. salto bwd. piked.
Parallel Bars   |  4              |  D      |  28     |  High wende and salto bwd t.or p.(Roethlisberger)
Parallel Bars   |  4              |  D      |  34     |  Double salto bwd. pike.
Parallel Bars   |  4              |  D      |  40     |  Double salto bwd. t. with ½ t. or salto bwd. ½ t. to salto fwd. tucked.
Parallel Bars   |  4              |  D      |  46     |  From hang on end, dbl. salto bwd. t. with 1/1 or ½
Parallel Bars   |  4              |  G      |  36     |  (Hiroyuki Kato)Double salto bwd. t. with 1/1 t.
Parallel Bars   |  4              |  F      |  48     |  From hang on end, dbl. salto bwd. t. with 2/1 t.
Horizontal Bar  |  1              |  A      |  1      |  Back uprise to handstand.
Horizontal Bar  |  1              |  A      |  7      |  Back uprise to handstand with ½ turn.
Horizontal Bar  |  1              |  A      |  13     |  Giant swing fwd.
Horizontal Bar  |  1              |  A      |  19     |  Giant swing fwd. with ½ t. thr. hdst.
Horizontal Bar  |  1              |  B      |  2      |  Back uprise to hdst. with 1/1 turn also to mixt.
Horizontal Bar  |  1              |  B      |  8      |  Swing bwd. and pirouette to hang.
Horizontal Bar  |  1              |  B      |  14     |  Giant swing fwd. with 1/1 turn in mixt grip.
Horizontal Bar  |  1              |  B      |  20     |  Flying giant swing fwd. or with½ turn.
Horizontal Bar  |  1              |  C      |  9      |  Swing bwd. and pirouette to support.
Horizontal Bar  |  1              |  C      |  15     |  Giant swing fwd. with 1/1 turn in double elgrip.
Horizontal Bar  |  1              |  C      |  21     |  Flying giant swing fwd. with 1/1 t.
Horizontal Bar  |  1              |  A      |  31     |  Giant swing bwd.
Horizontal Bar  |  1              |  A      |  37     |  Giant swing bwd. with ½ turn.
Horizontal Bar  |  1              |  A      |  43     |  Giant swing bwd. with hop to undergrip.
Horizontal Bar  |  1              |  B      |  26     |  Giant swing fwd. with one arm in ungr. (360°).
Horizontal Bar  |  1              |  B      |  32     |  One arm giant swing bwd. (360
Horizontal Bar  |  1              |  B      |  44     |  Flying giant swing bwd.
Horizontal Bar  |  1              |  C      |  27     |  (Zou Li Min)
Horizontal Bar  |  1              |  C      |  45     |  Flying giant swing bwd. with 1/1 t. (Quast)
Horizontal Bar  |  1              |  D      |  46     |  Flying giant swing bwd. with 2/1 t.
Horizontal Bar  |  1              |  B      |  50     |  Giant swing bwd. with hop ½ t. to el-grip.
Horizontal Bar  |  1              |  B      |  56     |  Giant swing bwd. with ½ t. to el-grip.
Horizontal Bar  |  1              |  B      |  62     |  Long swing fwd. with hop to el-grip.
Horizontal Bar  |  1              |  B      |  68     |  El-grip giant swing.
Horizontal Bar  |  1              |  C      |  51     |  Giant swing bwd. with hop 3/2 t. to undergrip, mixed el-grip.
Horizontal Bar  |  1              |  C      |  69     |  Giant swing rearways fwd. (Russian giant).
Horizontal Bar  |  1              |  D      |  52     |  (Rybalko)Giant swing bwd. with hop 3/2 t. to double el- grip.
Horizontal Bar  |  1              |  D      |  70     |  Giant swing rw. bwd. (Czech giant swing).
Horizontal Bar  |  1              |  A      |  73     |  Giant swing bwd. with inlocation during swing and dislocate to hdst.
Horizontal Bar  |  1              |  B      |  74     |  Steineman uprise w. ½ t. to support.(Ono)
Horizontal Bar  |  1              |  C      |  75     |  Elgrip giant swg. with 1/1 t. thr. hdst. in mx. gr.
Horizontal Bar  |  1              |  D      |  76     |  Giant swing rw. bwd. (Czech giant swing) with ½ turn to fwd giant swing.
Horizontal Bar  |  2              |  B      |  2      |  Back uprise and straddle over to hang rw.
Horizontal Bar  |  2              |  B      |  20     |  Back uprise and piked vault with ½ t. to hang.(Voronin)
Horizontal Bar  |  2              |  C      |  3      |  Back uprise and strad. hecht with ½ t. to hang(Markelov)
Horizontal Bar  |  2              |  C      |  9      |  Swing fwd. and vault bwd. strad. or piked to hang.(Tkatchev)
Horizontal Bar  |  2              |  D      |  4      |  Markelov stretched with legs together.(Yamawaki)
Horizontal Bar  |  2              |  D      |  10     |  Tkatchev stretched.
Horizontal Bar  |  2              |  D      |  16     |  Tkatchev straddled with ½ t. to mix el-grip into back uprise to hdst.(Lynch)
Horizontal Bar  |  2              |  D      |  22     |  Stalder, stoop circle or free hip circle bwd to Tkatchev straddle.(Piatti)
Horizontal Bar  |  2              |  E      |  11     |  Tkatchev stretched with ½ t. to mix el-grip into back uprise to hdst.(Moznik)
Horizontal Bar  |  2              |  E      |  17     |  Tkatchev straddled ½ t. to double elgrip.(Kulesza)
Horizontal Bar  |  2              |  E      |  23     |  Piatti stretched.
Horizontal Bar  |  2              |  F      |  6      |  Back uprise and hecht stretched with 3/2 t. to hang.(Walstrom)
Horizontal Bar  |  2              |  F      |  12     |  Tkatchev stretched with 1/1 t.(Liukin)
Horizontal Bar  |  2              |  F      |  24     |  Piatti stretched with ½ t. to mix el-grip into back uprise to hdst.(Kierzkowski)
Horizontal Bar  |  2              |  B      |  26     |  Back uprise and rear vault with ¼ t. to hang.
Horizontal Bar  |  2              |  C      |  33     |  Swing bwd. and salto fwd. t., p. or strad. to hg. also from el-grip.(Jäger)
Horizontal Bar  |  2              |  D      |  28     |  Piatti piked.
Horizontal Bar  |  2              |  D      |  34     |  Salto fwd. stretched, also from el-grip.(Balabanov)
Horizontal Bar  |  2              |  D      |  46     |  Swing fwd. and counter salto fwd. strad. to hg.(Xiao Ruizhi)
Horizontal Bar  |  2              |  E      |  29     |  Piatti with ½ t. to mix el-grip into back up. to hdst.
Horizontal Bar  |  2              |  E      |  47     |  Yamawaki ½ t. stretched to mixed grip into back uprise to hdst.(Muñoz - Pozzo)
Horizontal Bar  |  2              |  G      |  30     |  (Suarez)
Horizontal Bar  |  2              |  F      |  36     |  Salto fwd. stretched with 1/1 t. also from el grip.(Winkler - Pogorelev)
Horizontal Bar  |  2              |  G      |  42     |  Salto fwd. stretched with 2/1 t. also from el grip.
Horizontal Bar  |  2              |  C      |  57     |  Czech giant and vault bwd. strad. to hang.
Horizontal Bar  |  2              |  C      |  63     |  Swing fwd. and salto bwd. strad. w. ½ t. to hg.(Deltchev)
Horizontal Bar  |  2              |  C      |  69     |  Swing fwd. and salto bwd. piked w. ½ t. to hang.
Horizontal Bar  |  2              |  D      |  52     |  (Gaylord) Salto fwd, tuck or strad. over the bar, also from el-grip.
Horizontal Bar  |  2              |  E      |  59     |  Gaylord piked.
Horizontal Bar  |  2              |  F      |  54     |  Gaylord with ½ t.(Pegan)
Horizontal Bar  |  2              |  G      |  60     |  Pegan Pike.(Maras)
Horizontal Bar  |  2              |  G      |  66     |  Kovacs stretched or piked with 1/1 turn.(Cassina)
Horizontal Bar  |  2              |  F      |  72     |  Swing fwd. and salto bwd. w. 3/2 t. to hang.(Deff)
Horizontal Bar  |  2              |  C      |  75     |  Stalder ½ t. to rear vault with ¼ t. to hang.(Jansen)
Horizontal Bar  |  2              |  D      |  76     |  Salto bwd. ½ t.tucked over the bar.
Horizontal Bar  |  2              |  D      |  82     |  (Kovacs)Double salto bwd. t. over the bar.
Horizontal Bar  |  2              |  E      |  77     |  (Gaylord 2)Salto bwd. ½ t.piked over the bar.
Horizontal Bar  |  2              |  E      |  83     |  Kovacs piked or stretched.
Horizontal Bar  |  2              |  E      |  89     |  Kovacs with 1/1 t.(Kolman)
Horizontal Bar  |  2              |  H      |  84     |  Kovacs with 2/1 t.(Bretschneider)
Horizontal Bar  |  2              |  G      |  96     |  Kovacs with 3/2 t. to mix grip.(Shaham)
Horizontal Bar  |  3              |  A      |  1      |  Kip to hdst. or from mixed grip to hdst w. ½ t.
Horizontal Bar  |  3              |  A      |  13     |  From hang or from support, free hip circle through handstand.
Horizontal Bar  |  3              |  A      |  19     |  From hang or from support, free hip circle through handstand with ½ turn.
Horizontal Bar  |  3              |  B      |  2      |  Kip to hdst. in under or mixed grip w. 1/1 t. to mixed grip.
Horizontal Bar  |  3              |  B      |  8      |  (Weiler)From hdst., free hip circle fwd. thr. hdst.
Horizontal Bar  |  3              |  B      |  14     |  tourWeiler with ½ turn. giro
Horizontal Bar  |  3              |  B      |  20     |  From hang or from support, free hip circle-through handstand with ½ turn to el grip.
Horizontal Bar  |  3              |  C      |  3      |  Kip to hdst. in under or mixed grip w. 1/1 t. to el-grip.
Horizontal Bar  |  3              |  C      |  9      |  Weiler with 1/1 turn to mixed - grip.
Horizontal Bar  |  3              |  D      |  10     |  Weiler with 1/1 turn to double el - grip.
Horizontal Bar  |  3              |  A      |  25     |  From hang or from support, free hip circle hop to handstand.
Horizontal Bar  |  3              |  B      |  32     |  (Endo)Free circle fwd. straddled or legs together thr. hdst.
Horizontal Bar  |  3              |  B      |  38     |  Endo with ½ t. thr. hdst.
Horizontal Bar  |  3              |  B      |  44     |  (Stalder)Free circle bwd. straddle or legs together thr. hdst.
Horizontal Bar  |  3              |  C      |  27     |  From hang or from support, free hip circle hop through handstand with 1/1 turn
Horizontal Bar  |  3              |  C      |  39     |  Endo. with 1/1 t. thr. hdst. in mixt grip.
Horizontal Bar  |  3              |  C      |  45     |  Stalder with hop 1/1 t. through hdst.
Horizontal Bar  |  3              |  D      |  40     |  Endo with 1/1 t. thr. hdst. in el-grip.
Horizontal Bar  |  3              |  D      |  46     |  Stalder with hop 3/2 turn through hdst. in mix el-grip.
Horizontal Bar  |  3              |  E      |  47     |  Stalder with hop 3/2 turn through hdst. in el-grip.
Horizontal Bar  |  3              |  B      |  50     |  Stalder with ½ turn through hdst.
Horizontal Bar  |  3              |  B      |  56     |  Stalder with hop through hdst.
Horizontal Bar  |  3              |  C      |  51     |  Stalder with ½ turn through hdst. in el-grip.
Horizontal Bar  |  3              |  C      |  57     |  Stalder with hop through hdst. in el-grip.
Horizontal Bar  |  3              |  C      |  63     |  Stoop circle rearward fwd. through hdst. (Adler).
Horizontal Bar  |  3              |  D      |  64     |  Adler with ½ t. through hdst. in ovgr.
Horizontal Bar  |  3              |  D      |  70     |  Adler hop to hdst. in ungr. or ovgr. or mixed grip.
Horizontal Bar  |  3              |  E      |  65     |  (Fuentes)Adler and 1/1 t. through hdst. in ungr.
Horizontal Bar  |  3              |  A      |  79     |  Back toss to dorsal hang.
Horizontal Bar  |  3              |  B      |  80     |  From dorsal hang, uprise fwd. to support rw.(Steineman)
Horizontal Bar  |  3              |  B      |  92     |  Steineman uprise w. flank bwd. to sup
Horizontal Bar  |  3              |  C      |  81     |  Stoop in and free back toss to dorsal hang.
Horizontal Bar  |  3              |  C      |  87     |  Steineman uprise w. stoop or to hdst.(Koste)
Horizontal Bar  |  3              |  C      |  93     |  Endo in el-grip thr. hdst.
Horizontal Bar  |  3              |  D      |  76     |  Adler and 1/1 t. thr. hdst. in mixed grip, also with hop.
Horizontal Bar  |  3              |  D      |  94     |  Endo in el-grip and 1/1 t. to mixed grip or under-grip.
Horizontal Bar  |  3              |  A      |  103    |  Stoop circle fwd. to straddle cut to hang or sup.
Horizontal Bar  |  3              |  B      |  104    |  Stoop circle fwd. to straddle cut through hdst.
Horizontal Bar  |  3              |  C      |  105    |  Stoop circle fwd. to straddle cut with ½ t. (Carballo)
Horizontal Bar  |  3              |  D      |  100    |  Koste ½ turn to elgrip. Koste con ½ giro a cubital.(Likhovitskiy)
Horizontal Bar  |  3              |  D      |  106    |  Carballo with ½ turn to mixed el-grip.(Quintero)
Horizontal Bar  |  3              |  E      |  107    |  Quintero to el-grip.
Horizontal Bar  |  4              |  A      |  1      |  Salto fwd. piked or stretched, also with ½ t.
Horizontal Bar  |  4              |  B      |  2      |  Salto fwd. str. with 1/1 or 3/2 t.
Horizontal Bar  |  4              |  C      |  3      |  Salto fwd. str. with 2/1 or 5/2 t.
Horizontal Bar  |  4              |  C      |  9      |  Double salto fwd. t. or p.or with
Horizontal Bar  |  4              |  C      |  21     |  Double salto fwd. t. or p. or with ½ turn over the bar.
Horizontal Bar  |  4              |  D      |  10     |  Double salto fwd. t. or p. with 1/1 or 3/2 t.
Horizontal Bar  |  4              |  D      |  16     |  Double salto fwd. str. or with
Horizontal Bar  |  4              |  D      |  22     |  Dbl. salto fwd. t. or p. w. 1/1 or 3/2 t. over the bar.
Horizontal Bar  |  4              |  E      |  11     |  Double salto fwd. t. or p. with 2/1 or 5/2 t.
Horizontal Bar  |  4              |  E      |  17     |  Double salto fwd. str. with 1/1 or 3/2 t.
Horizontal Bar  |  4              |  G      |  6      |  Triple salto fwd. t. (Rumbutis)
Horizontal Bar  |  4              |  A      |  25     |  Salto bwd. piked or str. also with ½ or 1/1 t.
Horizontal Bar  |  4              |  B      |  26     |  Salto bwd. str. with 3/2 or 2/1 t.
Horizontal Bar  |  4              |  B      |  32     |  Double salto bwd. tuck or pike.
Horizontal Bar  |  4              |  C      |  27     |  Salto bwd. str. with 5/2 or 3/1 t.
Horizontal Bar  |  4              |  C      |  33     |  Double salto bwd. t. or pike with 1/1 t.(Tsukahara)
Horizontal Bar  |  4              |  C      |  39     |  Double salto bwd. str.
Horizontal Bar  |  4              |  D      |  34     |  Double salto bwd. t. or p. with 2/1 t.
Horizontal Bar  |  4              |  D      |  40     |  Double salto bwd. str. with 1/1 t.
Horizontal Bar  |  4              |  E      |  41     |  Double salto bwd. str. with 2/1 t.(Watanabe)
Horizontal Bar  |  4              |  F      |  42     |  (Fedorchenko)Double salto bwd. str. with 3/1 t.
Horizontal Bar  |  4              |  F      |  48     |  (Andrianov)(Hoffmann)Triple salto bwd. t. or over the bar.
Horizontal Bar  |  4              |  A      |  61     |  Hecht strad., hecht or hecht w. ½ t.
Horizontal Bar  |  4              |  B      |  50     |  Double salto bwd. t. or p. over the bar.
Horizontal Bar  |  4              |  B      |  62     |  Hecht w. 1/1 or 3/2 t.
Horizontal Bar  |  4              |  C      |  51     |  Dbl. salto bwd. t. or p. with 1/1 t. over the bar.
Horizontal Bar  |  4              |  C      |  57     |  Double salto bwd. str over the bar.
Horizontal Bar  |  4              |  D      |  52     |  Double salto bwd. t. or p. with 2/1 t. over the bar
Horizontal Bar  |  4              |  D      |  58     |  Double salto bwd. str. w. 1/1 t. over the bar.(Hayden)
Horizontal Bar  |  4              |  D      |  64     |  Hecht w. 2/1 t.
Horizontal Bar  |  4              |  G      |  54     |  Triple salto bwd. p.(Fardan)
Horizontal Bar  |  4              |  G      |  60     |  Triple salto bwd. t. with 1/1 t.(Belle)

`

export default () => (
  <div>
    <br />
    <h1>MAG 2020</h1>
    <ReactMarkdown source={magCode} escapeHtml={false} />
  </div>
)
