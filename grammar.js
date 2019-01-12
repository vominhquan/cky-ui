var data = `
# Ví dụ 1 qua thương cô nàng khéo nướng bánh-bông-lan
# Biến thể 1 qua thương bánh-bông-lan cô nàng nướng
# Biến thể 2 qua thương đôi má cô nàng khéo nướng bánh-bông-lan
# Biến thể 3 qua thương cô nướng bánh-bông-lan

S -> NP VP
VP -> VB NP
VP -> VP NP
VP -> ADV VB
NP -> PRP PRP
NP -> NP VP

NP -> qua
NP -> cô
NP -> nàng
PRP -> cô
PRP -> nàng
NP -> bánh-bông-lan
VB -> thương
VB -> nướng
VP -> nướng
ADV -> khéo

# Ví dụ 2 tiếng mưa còn vương kỷ-niệm
# Biến thể 1 tiếng mưa còn vương kỷ-niệm cuộc tình
# Biến thể 2 tiếng mưa bên ngoài còn vương kỷ-niệm
# Biến thể 3 kỷ-niệm còn vương trên tiếng mưa  

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
# Biến thể 1 tiếng thét xé đám mây bên ngoài
# Biến thể 2 tiếng thét bên ngoài còn xé đám mây

S -> NP VP
NP -> UN NN
NP -> NP PP
PP -> IN NP
VP -> VB NP

UN -> tiếng
UN -> đám
NN -> thét
VB -> thét
IN -> bên
NP -> ngoài
NN -> mây
VB -> xé

# Ví dụ 4 cơn gió xinh thì-thào trong lá biếc
# Biến thể 1 cơn gió xinh lại thét trong lá biếc
# Biến thể 2 cơn gió xinh trong lá biếc thì-thào
# Biến thể 3 cơn gió xinh thì-thào tình đôi lứa

S -> NP VP
NP -> UN NP
NP -> NP JJ
NP -> NP PP
PP -> IN NP
VP -> VB PP

UN -> cơn
NP -> gió
NP -> lá
JJ -> xinh
JJ -> biếc
IN -> trong
VB -> thì-thào
VP -> thì-thào

# Ví dụ 5 ﻿trời xui tan-vỡ tình đôi lứa
# Biến thể 1 ﻿trời xui tan-vỡ cuộc tình anh em
# Biến thể 2 ﻿trời lại xui tan-vỡ cuộc tình
# Biến thể 3 cuộc tình đôi lứa tan-vỡ

S -> NP VP
NP -> NP NP
NP -> Q NP
VP -> VM VB
VP -> VP NP

NP -> trời
NP -> tình
NP -> lứa
VB -> tan-vỡ
VP -> tan-vỡ
Q -> đôi
VM -> xui
VB -> xui

# Ví dụ 6 ﻿trăng sáng soi đôi má gầy
# Biến thể 1 ﻿trăng soi sáng đôi má
# Biến thể 2 ﻿trăng bên ngoài soi đôi má xinh
# Biến thể 3 ﻿trăng soi đôi má cô nàng xinh

S -> NP VP
NP -> NP JJ
NP -> Q NP
VP -> VB NP
VP -> VP ADV 

NP -> trăng
NP -> má
ADV -> sáng
VB -> soi
VP -> soi
Q -> đôi
JJ -> sáng
JJ -> gầy

# Ví dụ 7 lá rơi đắp mộ cuộc tình
# Biến thể 1 anh đắp mộ em
# Biến thể 2 trăng sáng soi mộ cuộc tình
# Biến thể 3 lá rơi trên má em gầy

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
# Biến thể 1 trăng soi đoàn thuyền đánh cá ra khơi
# Biến thể 2 đoàn thuyền ra khơi đánh cá
# Biến thể 3 anh ra thuyền nướng cá
# Biến thể 4 đoàn thuyền đánh cá ra khơi đánh cá

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
# Biến thể 1 em anh về xứ Cạnh-Đền 
# Biến thể 2 em về xứ Cạnh-Đền theo anh
# Biến thể 3 em theo anh về xứ Cạnh-Đền kỷ-niệm

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
# Biến thể 1 anh nghe mùi hương nồng-nàn trên tóc quen
# Biến thể 2 anh nghe mùi trên tóc em
# Biến thể 3 anh nghe mùi hương vương trên tóc quen

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
`