var data = `
# Ví dụ 1 qua thương cô nàng khéo nướng bánh-bông-lan

S -> NP VP
VP -> VB NP
VP -> VP NP
VP -> ADV VB
NP -> PRP PRP
NP -> NP VP

NP -> qua
PRP -> cô
PRP -> nàng
NP -> bánh-bông-lan
VB -> thương
VB -> nướng
VP -> nướng
ADV -> khéo

# Ví dụ 2 tiếng mưa còn vương kỷ-niệm

S -> NP VP
NP -> UN NN
VP -> VP NP
VP -> ADV VB

UN -> tiếng
NN -> mưa
ADV -> còn
VB -> vương
NP -> kỷ-niệm

# Ví dụ 3 tiếng thét bên ngoài xé đám mây

S -> NP VP
NP -> UN NN
NP -> NP PP
PP -> IN NP
VP -> VB NP

UN -> tiếng
UN -> đám
NN -> thét
IN -> bên
NP -> ngoài
NN -> mây
VB -> xé

# Ví dụ 4 cơn gió xinh thì-thào trong lá biếc

S -> NP VP
NP -> UN NP
NP -> NP JJ
PP -> IN NP
VP -> VB PP

UN -> cơn
NP -> gió
NP -> lá
JJ -> xinh
JJ -> biếc
IN -> trong
VB -> thì-thào


# Ví dụ 5 ﻿trời xui tan-vỡ tình đôi lứa

S -> NP VP
NP -> NP NP
NP -> Q NP
VP -> VM VB
VP -> VP NP

NP -> trời
NP -> tình
NP -> lứa
VB -> tan-vỡ
Q -> đôi
VM -> xui


# Ví dụ 6 ﻿trăng sáng soi đôi má gầy

S -> NP VP
NP -> NP JJ
NP -> Q NP
VP -> VB NP

NP -> trăng
NP -> má
VB -> soi
Q -> đôi
JJ -> sáng
JJ -> gầy


# Ví dụ 7 lá rơi đắp mộ cuộc tình

S -> NP VP
NP -> UN NN
NP -> NP NP
VP -> VB VP
VP -> VB NP


UN -> cuộc
NN -> tình
NP -> lá
NP -> mộ
VB -> rơi
VB -> đắp

# Ví dụ 8 đoàn thuyền đánh cá lại ra khơi

S -> NP VP
NP -> UN NP
NP -> NN VP
VP -> ADV VP 
VP -> VB NP

NP -> khơi
UN -> đoàn
NN -> thuyền
NP -> cá
VB -> ra
VB -> đánh
ADV -> lại

# Ví dụ 9 em theo anh về xứ Cạnh-Đền 

S -> NP VP
NP -> NN NNP
VP -> VP VP
VP -> VB NP

NP -> em
NP -> anh
NN -> xứ
VB -> theo
VB -> về
NNP -> Cạnh-Đền


# Ví dụ 10 anh nghe mùi hương trên tóc quen nồng-nàn

S -> NP VP
VP -> VB NP
NP -> NP PP
PP -> IN NP
NP -> NN ADJP
ADJP -> JJ JJ

NP -> anh
NP -> mùi
NP -> hương
NP -> tóc
VP -> nghe
IN -> trên
JJ -> quen
JJ -> nồng-nàn


# dua be nhin dan chim dang bay

S -> NP VP
NP -> NN NN
NP -> NP VP
VP -> VB NP
VP -> ADV VB

NN -> dua
NN -> be
NN -> dan
NN -> chim
VB -> nhin
VB -> bay
ADV -> dang

# nó vừa gặp mấy người bạn trường cũ

S -> NP VP
NP -> NN NN
NP -> NN JJ
NP -> JJ NP
NP -> NP NP
NP -> Q NP
VP -> VP NP

NP -> nó
NN -> người
NN -> bạn
NN -> trường
VB -> gặp
ADV -> vừa
Q -> mấy
JJ -> cũ
`