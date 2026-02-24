Generate IELTS vocabulary flashcards from the word list below.


## Level 1 — B1/B2 Foundation (Words 1–200)

1. achieve
2. affect
3. analyze
4. approach
5. aspect
6. assess
7. assume
8. attitude
9. available
10. benefit
11. cause
12. challenge
13. citizen
14. claim
15. classify
16. community
17. compare
18. complex
19. concept
20. concern
21. conclude
22. condition
23. conduct
24. consequence
25. consider
26. consist
27. consume
28. contribute
29. control
30. create
31. culture
32. data
33. decline
34. define
35. demand
36. depend
37. describe
38. develop
39. difference
40. distribute
41. diverse
42. economic
43. education
44. effect
45. emerge
46. employ
47. energy
48. environment
49. establish
50. evaluate
51. evidence
52. examine
53. expand
54. expect
55. experience
56. explain
57. factor
58. feature
59. focus
60. function
61. generate
62. global
63. govern
64. growth
65. harm
66. health
67. impact
68. implement
69. improve
70. increase
71. indicate
72. individual
73. influence
74. infrastructure
75. initiative
76. institution
77. involve
78. issue
79. justify
80. lack
81. limit
82. maintain
83. major
84. manage
85. measure
86. method
87. migrate
88. modern
89. monitor
90. national
91. natural
92. necessary
93. negative
94. obtain
95. occur
96. opportunity
97. outcome
98. participate
99. policy
100. pollute
101. population
102. positive
103. potential
104. prevent
105. primary
106. process
107. produce
108. promote
109. propose
110. protect
111. provide
112. purpose
113. raise
114. reduce
115. reflect
116. region
117. regulate
118. relate
119. release
120. rely
121. represent
122. require
123. research
124. resource
125. respond
126. result
127. retain
128. reveal
129. role
130. rural
131. sector
132. significant
133. society
134. solution
135. source
136. standard
137. strategy
138. structure
139. suggest
140. support
141. sustain
142. system
143. target
144. technology
145. tend
146. theory
147. traditional
148. transform
149. trend
150. urban
151. value
152. vary
153. victim
154. welfare
155. access
156. adapt
157. address
158. adequate
159. agency
160. argue
161. aware
162. balance
163. barrier
164. behavior
165. budget
166. capital
167. chart
168. choice
169. collect
170. commit
171. communicate
172. compete
173. conflict
174. contract
175. cope
176. corrupt
177. cost
178. crime
179. crisis
180. critical
181. decrease
182. democracy
183. detect
184. disease
185. domestic
186. dominate
187. economy
188. emission
189. enforce
190. identify
191. observe
192. category
193. principle
194. publish
195. innovate
196. integrate
197. allocate
198. coordinate
199. debate
200. expose

Each card must follow this exact JSON structure:
{
  "id": "string",
  "level": number,
  "front": "word",
  "pron": "short phonetic e.g. AN-uh-lyz",
  "pos": "noun / verb / adj / adv",
  "back": "concise definition",
  "back_trans": "translation of back in [native_lang]",
  "collocation": "phrase1, phrase2, phrase3",
  "family": "word (pos), word (pos)",
  "tags": ["Tag1", "Tag2"],
  "related": ["word1", "word2", "word3", "word4"],
  "example": "Natural sentence using the word in an academic context.",
  "example_trans": "translation of example in [native_lang]"
}

Params:
- native_lang: [fa]
- id_start: 1

Rules:
- `pron`: short phonetic only, uppercase stressed syllable
- `pos`: use "/" for multiple e.g. "noun / verb"
- `back`: one concise sentence, no more than 8 words
- `back_trans`: direct translation of back field into native_lang
- `collocation`: exactly 3 most common academic collocations, comma separated
- `family`: most useful word forms only, not exhaustive
- `tags`: maximum 2, choose only from approved list below
- `related`: exactly 4 words
- `example`: one natural academic sentence appropriate for IELTS Writing Task 2
- `example_trans`: direct translation of example field into native_lang

Approved tags:
People & Relationships, Work & Education, Society & Culture,
Environment & Nature, Health & Wellbeing, Economy & Money,
Science & Technology, Politics & Law, Travel & Places,
Time & Change, Media & Communication, Arts & Entertainment,
Food & Lifestyle, Religion & Belief, Crime & Justice,
Housing & Urban Life, Sports & Leisure, Trade & Globalisation,
Ethics & Philosophy, War & Conflict

Return ONLY a valid JSON object, no explanation, no markdown:
[ ...array of card objects... ]
