import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
//

const MagCode = () => (
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>app</th>
        <th>eg</th>
        <th>value</th>
        <th>index</th>
        <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>A</td>
        <td>1</td>
        <td>From hdst. lower to L-sit or strad. L-sit (2 s.).</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>A</td>
        <td>7</td>
        <td>From stand, Swiss press to hdst. (2 s.).</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>A</td>
        <td>13</td>
        <td>Rock to hdst. from prone position (2 s.).</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>A</td>
        <td>19</td>
        <td>Handstand (2 s.).</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>B</td>
        <td>2</td>
        <td>V-sit (2 s.).</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>B</td>
        <td>8</td>
        <td>Piked body, str. arm or str. body, bent arm press to hdst. with legs together (2 s.).</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>B</td>
        <td>14</td>
        <td>Swiss press from split, L-sit, strad. L-sit or front sup. (2 s.).</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>B</td>
        <td>20</td>
        <td>Press or lower or swing to Japanese hdst. (2 s.).</td>
      </tr>
      <tr>
        <td>9</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>C</td>
        <td>3</td>
        <td>V-sit with legs horiz. (2 s.).(Manna)</td>
      </tr>
      <tr>
        <td>10</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>C</td>
        <td>9</td>
        <td>V-sit (2 s) and press to hdst. (2 s.)</td>
      </tr>
      <tr>
        <td>11</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>C</td>
        <td>21</td>
        <td>From split press to Japanese handstand (2 s.).</td>
      </tr>
      <tr>
        <td>12</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>D</td>
        <td>10</td>
        <td>Manna (2 s.) and press to hdst. (2 s.)</td>
      </tr>
      <tr>
        <td>13</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>D</td>
        <td>16</td>
        <td>From Manna (2 s.), turn over (dislocation) to handstand (2 s.).</td>
      </tr>
      <tr>
        <td>14</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>A</td>
        <td>25</td>
        <td>Support lever, legs straddle (2 s.).</td>
      </tr>
      <tr>
        <td>15</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>A</td>
        <td>31</td>
        <td>½ or 1/1 turn in handstand or to handstand.</td>
      </tr>
      <tr>
        <td>16</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>A</td>
        <td>37</td>
        <td>From L-sit, etc., turn over bwd. to stand.</td>
      </tr>
      <tr>
        <td>17</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>B</td>
        <td>26</td>
        <td>Support lever (2 s.).</td>
      </tr>
      <tr>
        <td>18</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>B</td>
        <td>32</td>
        <td>From straddled support lever (2 s.) press hdst. (2 s.).</td>
      </tr>
      <tr>
        <td>19</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>B</td>
        <td>44</td>
        <td>Endo roll to handstand (2 s.).</td>
      </tr>
      <tr>
        <td>20</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>C</td>
        <td>27</td>
        <td>Swallow (2 s.).</td>
      </tr>
      <tr>
        <td>21</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>C</td>
        <td>33</td>
        <td>From support lever 2 s. press handstand (2 s.).</td>
      </tr>
      <tr>
        <td>22</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>C</td>
        <td>45</td>
        <td>Endo roll piked to handstand (2 s.). Also final phase with straddle.</td>
      </tr>
      <tr>
        <td>23</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>D</td>
        <td>34</td>
        <td>From Swallow 2 s. press to Japanese hdst. (2 s.).(Alvariño)</td>
      </tr>
      <tr>
        <td>24</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>A</td>
        <td>49</td>
        <td>From stand or rear support, push off 1 foot through hdst. or back walkover.</td>
      </tr>
      <tr>
        <td>25</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>A</td>
        <td>55</td>
        <td>Forward walkover.</td>
      </tr>
      <tr>
        <td>26</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>A</td>
        <td>61</td>
        <td>Cross or side split (stop required).</td>
      </tr>
      <tr>
        <td>27</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>A</td>
        <td>67</td>
        <td>Any standing scale (2 s.).</td>
      </tr>
      <tr>
        <td>28</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>B</td>
        <td>68</td>
        <td>Any standing scale with 180° hold (2 s.).</td>
      </tr>
      <tr>
        <td>29</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>A</td>
        <td>73</td>
        <td>Jump bwd. to front support.</td>
      </tr>
      <tr>
        <td>30</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>A</td>
        <td>79</td>
        <td>Butterfly.</td>
      </tr>
      <tr>
        <td>31</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>A</td>
        <td>85</td>
        <td>Breakdance variations.</td>
      </tr>
      <tr>
        <td>32</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>A</td>
        <td>91</td>
        <td>2 circles or flairs.</td>
      </tr>
      <tr>
        <td>33</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>B</td>
        <td>74</td>
        <td>Jump bwd. with pike-stretch or with 1/1 turn to front support.</td>
      </tr>
      <tr>
        <td>34</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>B</td>
        <td>80</td>
        <td>Butterfly with 1/1 twist fwd. or bwd.(Tong Fei)</td>
      </tr>
      <tr>
        <td>35</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>B</td>
        <td>92</td>
        <td>Circles or flair to handstand.</td>
      </tr>
      <tr>
        <td>36</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>C</td>
        <td>81</td>
        <td>Butterfly with 2/1 twist.</td>
      </tr>
      <tr>
        <td>37</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>C</td>
        <td>93</td>
        <td>(Gogoladze) Flair or circle to hdst. continue to flair or circle.</td>
      </tr>
      <tr>
        <td>38</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>D</td>
        <td>94</td>
        <td>Flair hopping with 360° t. bwd. thr. hdst and back to flair (2 hops).</td>
      </tr>
      <tr>
        <td>39</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>A</td>
        <td>103</td>
        <td>Flair with ½ spindle.</td>
      </tr>
      <tr>
        <td>40</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>A</td>
        <td>115</td>
        <td>Russian wendeswing with 360° or 540°</td>
      </tr>
      <tr>
        <td>41</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>B</td>
        <td>98</td>
        <td>Lower from hdst. to flair or circle.</td>
      </tr>
      <tr>
        <td>42</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>B</td>
        <td>104</td>
        <td>Flair with 1/1 spindle (in 2 circles).</td>
      </tr>
      <tr>
        <td>43</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>B</td>
        <td>110</td>
        <td>Flair with ½ spindle to handstand.</td>
      </tr>
      <tr>
        <td>44</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>B</td>
        <td>116</td>
        <td>Russian wendeswing with 720° or 900°</td>
      </tr>
      <tr>
        <td>45</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>C</td>
        <td>105</td>
        <td>Flair with >270 spindle (in 2 circles) directly to handstand.</td>
      </tr>
      <tr>
        <td>46</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>C</td>
        <td>117</td>
        <td>(Fedorchenko)Russian wendeswing with 1080° or more.</td>
      </tr>
      <tr>
        <td>47</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>D</td>
        <td>112</td>
        <td>Flair with > 270º spindle (in 2 circles) directly to handstand and continue to circle or flair.</td>
      </tr>
      <tr>
        <td>48</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>A</td>
        <td>121</td>
        <td>Roll bwd. through hdst. with ½ t.</td>
      </tr>
      <tr>
        <td>49</td>
        <td>Floor Exercise</td>
        <td>1</td>
        <td>B</td>
        <td>122</td>
        <td>Roll bwd. with hop 1/1 t. through hdst.</td>
      </tr>
      <tr>
        <td>50</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>A</td>
        <td>1</td>
        <td>Neck or head spring w. ½ t. to hdst. or 1/1 t. to rear support.</td>
      </tr>
      <tr>
        <td>51</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>A</td>
        <td>7</td>
        <td>Forward handspring or flyspring.</td>
      </tr>
      <tr>
        <td>52</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>A</td>
        <td>13</td>
        <td>Dive roll.</td>
      </tr>
      <tr>
        <td>53</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>A</td>
        <td>19</td>
        <td>Salto fwd. tucked or piked.</td>
      </tr>
      <tr>
        <td>54</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>B</td>
        <td>14</td>
        <td>Jump with 1/1 twist to fwd. hdsp.</td>
      </tr>
      <tr>
        <td>55</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>B</td>
        <td>20</td>
        <td>Salto fwd. stretched.</td>
      </tr>
      <tr>
        <td>56</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>C</td>
        <td>21</td>
        <td>Salto fwd. str. to front support.</td>
      </tr>
      <tr>
        <td>57</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>D</td>
        <td>10</td>
        <td>Handspring salto fwd. tuck (Marinich style).(Morandi)</td>
      </tr>
      <tr>
        <td>58</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>D</td>
        <td>22</td>
        <td>Double salto fwd. tucked.</td>
      </tr>
      <tr>
        <td>59</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>E</td>
        <td>23</td>
        <td>Double salto fwd. piked.</td>
      </tr>
      <tr>
        <td>60</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>A</td>
        <td>25</td>
        <td>Aerial walkover fwd.</td>
      </tr>
      <tr>
        <td>61</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>A</td>
        <td>31</td>
        <td>½Salto tucked and piked ½ t.½</td>
      </tr>
      <tr>
        <td>62</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>B</td>
        <td>32</td>
        <td>Salto tucked with 1/1 t.</td>
      </tr>
      <tr>
        <td>63</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>B</td>
        <td>38</td>
        <td>Salto fwd. str. with ½ t.</td>
      </tr>
      <tr>
        <td>64</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>B</td>
        <td>44</td>
        <td>Salto tucked 3/2 t.</td>
      </tr>
      <tr>
        <td>65</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>C</td>
        <td>39</td>
        <td>Salto fwd. str. with 1/1 t.</td>
      </tr>
      <tr>
        <td>66</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>C</td>
        <td>45</td>
        <td>Salto fwd. str. with 3/2 t.</td>
      </tr>
      <tr>
        <td>67</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>D</td>
        <td>40</td>
        <td>Salto fwd. str. with 2/1 t.</td>
      </tr>
      <tr>
        <td>68</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>E</td>
        <td>29</td>
        <td>Double salto fwd. tucked with ½ t.</td>
      </tr>
      <tr>
        <td>69</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>E</td>
        <td>41</td>
        <td>Salto fwd. str. with 5/2 t.</td>
      </tr>
      <tr>
        <td>70</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>F</td>
        <td>30</td>
        <td>Double salto fwd. piked with ½ t.</td>
      </tr>
      <tr>
        <td>71</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>F</td>
        <td>42</td>
        <td>Salto fwd. str. with 3/1 t.(Shirai 2)</td>
      </tr>
      <tr>
        <td>72</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>B</td>
        <td>50</td>
        <td>Salto fwd. t. or p. to front support.</td>
      </tr>
      <tr>
        <td>73</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>C</td>
        <td>51</td>
        <td>Salto fwd. t., p or str. with 1/1 t. to front support.</td>
      </tr>
      <tr>
        <td>74</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>D</td>
        <td>58</td>
        <td>Jump fwd. with ½ t. to dbl. salto bwd. t. (Deferr)</td>
      </tr>
      <tr>
        <td>75</td>
        <td>Floor Exercise</td>
        <td>2</td>
        <td>F</td>
        <td>54</td>
        <td>Double salto fwd. tucked with 1/1 turn.</td>
      </tr>
      <tr>
        <td>76</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>A</td>
        <td>1</td>
        <td>Salto backwards tucked or piked.</td>
      </tr>
      <tr>
        <td>77</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>A</td>
        <td>7</td>
        <td>Salto backwards tucked or piked w. ½ t.</td>
      </tr>
      <tr>
        <td>78</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>A</td>
        <td>13</td>
        <td>Back handspring</td>
      </tr>
      <tr>
        <td>79</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>B</td>
        <td>2</td>
        <td>Salto backwards stretched.</td>
      </tr>
      <tr>
        <td>80</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>B</td>
        <td>8</td>
        <td>Salto backwards str. w. ½ t.</td>
      </tr>
      <tr>
        <td>81</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>B</td>
        <td>14</td>
        <td>Tempo salto bwd.</td>
      </tr>
      <tr>
        <td>82</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>B</td>
        <td>20</td>
        <td>Salto backwards tucked w. 3/2 t. .</td>
      </tr>
      <tr>
        <td>83</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>C</td>
        <td>3</td>
        <td>Double salto bwd. tucked.</td>
      </tr>
      <tr>
        <td>84</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>C</td>
        <td>15</td>
        <td>Double salto bwd. piked.</td>
      </tr>
      <tr>
        <td>85</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>C</td>
        <td>21</td>
        <td>Salto bwd. str. with 3/2 t.</td>
      </tr>
      <tr>
        <td>86</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>D</td>
        <td>4</td>
        <td>Double salto bwd. t. or piked with 1/1 t. Also Arabian double t. or p. ½ t. (Tsukahara)</td>
      </tr>
      <tr>
        <td>87</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>D</td>
        <td>10</td>
        <td>Arabian double tucked or piked or double salto bwd. t. or p. with ½ t.</td>
      </tr>
      <tr>
        <td>88</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>D</td>
        <td>22</td>
        <td>Salto bwd. str. with 5/2 t.</td>
      </tr>
      <tr>
        <td>89</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>E</td>
        <td>5</td>
        <td>Double salto bwd. tucked with 2/1 t.</td>
      </tr>
      <tr>
        <td>90</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>E</td>
        <td>11</td>
        <td>Double salto bwd. t. with 3/2 t. or Salto bwd. str. 3/2 to fwd. salto tucked</td>
      </tr>
      <tr>
        <td>91</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>E</td>
        <td>23</td>
        <td>Salto bwd. str. with 7/2 t.</td>
      </tr>
      <tr>
        <td>92</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>G</td>
        <td>6</td>
        <td>Double salto bwd. tucked with 3/1 (Ri Jong Song)</td>
      </tr>
      <tr>
        <td>93</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>F</td>
        <td>12</td>
        <td>Double salto bwd. tucked with 5/2</td>
      </tr>
      <tr>
        <td>94</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>H</td>
        <td>18</td>
        <td>Triple salto bwd. tucked. (Liukin)</td>
      </tr>
      <tr>
        <td>95</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>A</td>
        <td>37</td>
        <td>Jump bwd. with ½ t. to roll fwd.</td>
      </tr>
      <tr>
        <td>96</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>A</td>
        <td>43</td>
        <td>Jump bwd. with ½ t. to handspring forward.</td>
      </tr>
      <tr>
        <td>97</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>B</td>
        <td>26</td>
        <td>Salto bwd. str. with 1/1 t.</td>
      </tr>
      <tr>
        <td>98</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>B</td>
        <td>44</td>
        <td>Jump bwd. with ½ t. to salto fwd. t. or p. to f. sup.</td>
      </tr>
      <tr>
        <td>99</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>C</td>
        <td>27</td>
        <td>Salto bwd. str. with 2/1 t.</td>
      </tr>
      <tr>
        <td>100</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>D</td>
        <td>28</td>
        <td>Salto bwd. str. with 3/1 t.</td>
      </tr>
      <tr>
        <td>101</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>E</td>
        <td>47</td>
        <td>Double salto straddled with 1/1 t.(Lou Yun)</td>
      </tr>
      <tr>
        <td>102</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>F</td>
        <td>30</td>
        <td>Salto bwd. str. with 4/1 t.(Shirai / Nguyen)</td>
      </tr>
      <tr>
        <td>103</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>F</td>
        <td>48</td>
        <td>KolyvanovSalto bwd. str. with 2/1 t and salto bwd piked.</td>
      </tr>
      <tr>
        <td>104</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>D</td>
        <td>52</td>
        <td>Double salto bwd. stretched.</td>
      </tr>
      <tr>
        <td>105</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>E</td>
        <td>53</td>
        <td>Arabian Jump bwd. to dbl. salto fwd. str. or double salto bwd. stretched with ½ t.Tamayo</td>
      </tr>
      <tr>
        <td>106</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>E</td>
        <td>58</td>
        <td>Double salto bwd. stretched with 1/1 t. or arabian Jump bwd. to dbl. salto fwd. str. with ½ t.</td>
      </tr>
      <tr>
        <td>107</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>F</td>
        <td>54</td>
        <td>Double salto bwd. str. with 3/2 t. or arabian Jump bwd. to dbl. salto fwd. str. with 1/1 t.</td>
      </tr>
      <tr>
        <td>108</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>F</td>
        <td>59</td>
        <td>Double salto bwd. str. with 2/1 t.</td>
      </tr>
      <tr>
        <td>109</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>G</td>
        <td>65</td>
        <td>Double salto bwd. str. with 5/2 t.</td>
      </tr>
      <tr>
        <td>110</td>
        <td>Floor Exercise</td>
        <td>3</td>
        <td>H</td>
        <td>71</td>
        <td>Double salto bwd. str. with 3/1 t. Shirai 3</td>
      </tr>
      <tr>
        <td>111</td>
        <td>Pommel Horse</td>
        <td>1</td>
        <td>A</td>
        <td>1</td>
        <td>Scissor forward.</td>
      </tr>
      <tr>
        <td>112</td>
        <td>Pommel Horse</td>
        <td>1</td>
        <td>A</td>
        <td>7</td>
        <td>Scissor forward with ½ t.</td>
      </tr>
      <tr>
        <td>113</td>
        <td>Pommel Horse</td>
        <td>1</td>
        <td>A</td>
        <td>13</td>
        <td>Scissor backward.</td>
      </tr>
      <tr>
        <td>114</td>
        <td>Pommel Horse</td>
        <td>1</td>
        <td>A</td>
        <td>19</td>
        <td>Scissor backward with ½ turn.</td>
      </tr>
      <tr>
        <td>115</td>
        <td>Pommel Horse</td>
        <td>1</td>
        <td>B</td>
        <td>8</td>
        <td>Scissor forward with hop swd.</td>
      </tr>
      <tr>
        <td>116</td>
        <td>Pommel Horse</td>
        <td>1</td>
        <td>B</td>
        <td>14</td>
        <td>Double scissor fwd.(¼ t. fwd. a. ¼ t. bwd.).</td>
      </tr>
      <tr>
        <td>117</td>
        <td>Pommel Horse</td>
        <td>1</td>
        <td>C</td>
        <td>3</td>
        <td>Double Scissor Fwd. with Travel Sideways through Handstand.(Stepanyan)</td>
      </tr>
      <tr>
        <td>118</td>
        <td>Pommel Horse</td>
        <td>1</td>
        <td>C</td>
        <td>9</td>
        <td>Scissor fwd. with hop swd. from one end to the other (3/3).</td>
      </tr>
      <tr>
        <td>119</td>
        <td>Pommel Horse</td>
        <td>1</td>
        <td>C</td>
        <td>15</td>
        <td>Double scissor fwd. (¼ t. fwd. a. ¼ t. bwd.) with travel sdw.</td>
      </tr>
      <tr>
        <td>120</td>
        <td>Pommel Horse</td>
        <td>1</td>
        <td>D</td>
        <td>4</td>
        <td>Scissor fwd. w. ¼ t. through hstd. on 1 p., lower to sup. w. strad. legs on the other arm.</td>
      </tr>
      <tr>
        <td>121</td>
        <td>Pommel Horse</td>
        <td>1</td>
        <td>D</td>
        <td>16</td>
        <td>Double scissor forward with hop sideways from one end to the other (3/3).(Mikulak)</td>
      </tr>
      <tr>
        <td>122</td>
        <td>Pommel Horse</td>
        <td>1</td>
        <td>D</td>
        <td>22</td>
        <td>Swing bwd. w. ¼ t. through hstd. on 1 p., lower to sup. w. strad. legs on the other arm.</td>
      </tr>
      <tr>
        <td>123</td>
        <td>Pommel Horse</td>
        <td>1</td>
        <td>B</td>
        <td>26</td>
        <td>Scissor bwd.with hop swd.(also with ½ t.).</td>
      </tr>
      <tr>
        <td>124</td>
        <td>Pommel Horse</td>
        <td>1</td>
        <td>B</td>
        <td>32</td>
        <td>Double scissor bwd. (¼ t. fwd. a. ¼ t. bwd).</td>
      </tr>
      <tr>
        <td>125</td>
        <td>Pommel Horse</td>
        <td>1</td>
        <td>B</td>
        <td>44</td>
        <td>Leg cut or undercut bwd. through hdst. and lower to support w. strad. legs.</td>
      </tr>
      <tr>
        <td>126</td>
        <td>Pommel Horse</td>
        <td>1</td>
        <td>C</td>
        <td>27</td>
        <td>Scissor bwd. with hop swd. from one end to the other</td>
      </tr>
      <tr>
        <td>127</td>
        <td>Pommel Horse</td>
        <td>1</td>
        <td>C</td>
        <td>45</td>
        <td>Leg cut or undercut bwd. through hdst. and lower to flair or circle.</td>
      </tr>
      <tr>
        <td>128</td>
        <td>Pommel Horse</td>
        <td>1</td>
        <td>D</td>
        <td>34</td>
        <td>Scissor fwd. 1/4 t. to hdst., 1/4 t. and straddle down bwd on 1 arm on the other pommel.(Bryan)</td>
      </tr>
      <tr>
        <td>129</td>
        <td>Pommel Horse</td>
        <td>1</td>
        <td>D</td>
        <td>40</td>
        <td>Scissor bwd. ¼ t. to hdst., ¼ t. and straddle down bwd on 1 arm on the other pommel.</td>
      </tr>
      <tr>
        <td>130</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>A</td>
        <td>1</td>
        <td>Any circle or flair in side support.</td>
      </tr>
      <tr>
        <td>131</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>A</td>
        <td>13</td>
        <td>Circles in cross support frontways on end.</td>
      </tr>
      <tr>
        <td>132</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>A</td>
        <td>19</td>
        <td>Circles in cross support rearways on end.</td>
      </tr>
      <tr>
        <td>133</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>B</td>
        <td>2</td>
        <td>Circle in side support on 1 pommel.</td>
      </tr>
      <tr>
        <td>134</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>B</td>
        <td>8</td>
        <td>Circle with support outside pommels or between the pommels.</td>
      </tr>
      <tr>
        <td>135</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>B</td>
        <td>14</td>
        <td>Circles in cross support on 1 pommel</td>
      </tr>
      <tr>
        <td>136</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>B</td>
        <td>20</td>
        <td>Circles in cross support between the pommels.</td>
      </tr>
      <tr>
        <td>137</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>A</td>
        <td>25</td>
        <td>Circle in side sup., ¼ spindle to cross sup.</td>
      </tr>
      <tr>
        <td>138</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>A</td>
        <td>31</td>
        <td>Cross support on end, circle with ¼ spindle to side support.</td>
      </tr>
      <tr>
        <td>139</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>B</td>
        <td>26</td>
        <td>Side support, ½ spindle.</td>
      </tr>
      <tr>
        <td>140</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>B</td>
        <td>32</td>
        <td>Cross support on end, ½ spindle.</td>
      </tr>
      <tr>
        <td>141</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>B</td>
        <td>38</td>
        <td>Flair or circle through hdst. and lower to sup. w. strad. legs.</td>
      </tr>
      <tr>
        <td>142</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>C</td>
        <td>39</td>
        <td>Flair or circle through hdst. (with or without ½ t.) and lower to flair or circle.(Tippelt)</td>
      </tr>
      <tr>
        <td>143</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>C</td>
        <td>45</td>
        <td>Flair with hop travel bwd. through hdst. and lower to sup. w. straddle legs.</td>
      </tr>
      <tr>
        <td>144</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>D</td>
        <td>28</td>
        <td>Any side support 1/1 spindle w. legs straddle inside max. 2 circles.</td>
      </tr>
      <tr>
        <td>145</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>D</td>
        <td>34</td>
        <td>Any cross support 1/1 spindle within max. 2 circles. (also with ?, ½ or 2/3 travel).</td>
      </tr>
      <tr>
        <td>146</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>D</td>
        <td>46</td>
        <td>Flair with hop travel bwd. through hdst. and lower to circles or flairs.</td>
      </tr>
      <tr>
        <td>147</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>E</td>
        <td>29</td>
        <td>Any side support 1/1 spindle with hand support to the other side and return (max. 2 flairs or circles).(Eichorn)</td>
      </tr>
      <tr>
        <td>148</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>E</td>
        <td>35</td>
        <td>Cross support, 1/1 spindle with hands between the pommels max. 2 circles. (also with ? travel).</td>
      </tr>
      <tr>
        <td>149</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>E</td>
        <td>41</td>
        <td>1/1 spindle w. legs straddle or together on the pommels inside max. 2 circles. (Berki)</td>
      </tr>
      <tr>
        <td>150</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>F</td>
        <td>30</td>
        <td>Side support, 1/1 spindle with both pommels between the hands (flair or circle).</td>
      </tr>
      <tr>
        <td>151</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>A</td>
        <td>61</td>
        <td>Double rear (kehr).</td>
      </tr>
      <tr>
        <td>152</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>B</td>
        <td>50</td>
        <td>Direct Stöckli A (DSA).</td>
      </tr>
      <tr>
        <td>153</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>B</td>
        <td>56</td>
        <td>Direct Stöckli B (DSB).</td>
      </tr>
      <tr>
        <td>154</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>B</td>
        <td>62</td>
        <td>Kehrswing bwd. hop with ½ t. on the pommels.</td>
      </tr>
      <tr>
        <td>155</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>B</td>
        <td>68</td>
        <td>Kehr with 270º t. on 1 p. (Sohn technique) from cross to side support.</td>
      </tr>
      <tr>
        <td>156</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>C</td>
        <td>51</td>
        <td>Reverse Stöckli or DSA strad. through hdst. and lower to sup. w. strad. legs or circle.</td>
      </tr>
      <tr>
        <td>157</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>C</td>
        <td>69</td>
        <td>Kehr with 270º t. on 1 p. (Sohn technique) from side to cross support.</td>
      </tr>
      <tr>
        <td>158</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>E</td>
        <td>65</td>
        <td>Kehr with 1/1 turn on 1 pommel.(Sohn)</td>
      </tr>
      <tr>
        <td>159</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>F</td>
        <td>54</td>
        <td>Reverse Stöckli, DSA or pommel circle strad. through hdst., 3/3 travel (fwd.- bwd), 360º turn to flairs.</td>
      </tr>
      <tr>
        <td>160</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>A</td>
        <td>79</td>
        <td>Wendeswing fwd. w. ½ t. to sup. fw. on the end, from side support using 1 or 2 pommels.</td>
      </tr>
      <tr>
        <td>161</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>A</td>
        <td>91</td>
        <td>Schwabenflank.</td>
      </tr>
      <tr>
        <td>162</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>B</td>
        <td>74</td>
        <td>Direct Tramlot.</td>
      </tr>
      <tr>
        <td>163</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>B</td>
        <td>80</td>
        <td>Reverse Stöckli, 180° or 270° turn in one circle.</td>
      </tr>
      <tr>
        <td>164</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>B</td>
        <td>86</td>
        <td>Double Swiss.</td>
      </tr>
      <tr>
        <td>165</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>B</td>
        <td>92</td>
        <td>Czechkehre on the leather or pommels.</td>
      </tr>
      <tr>
        <td>166</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>C</td>
        <td>81</td>
        <td>Reverse Stöckli with 270° t. to 1 pommel.</td>
      </tr>
      <tr>
        <td>167</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>D</td>
        <td>88</td>
        <td>Czechkehre outside p. (Pinheiro)</td>
      </tr>
      <tr>
        <td>168</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>E</td>
        <td>83</td>
        <td>Reverse Stöckli with 360° t. on 1 pommel.(Bezugo)</td>
      </tr>
      <tr>
        <td>169</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>A</td>
        <td>97</td>
        <td>Russian wendeswing with 180</td>
      </tr>
      <tr>
        <td>170</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>A</td>
        <td>103</td>
        <td>On the leather, Russian wendeswing with 180°, also with travel.</td>
      </tr>
      <tr>
        <td>171</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>B</td>
        <td>98</td>
        <td>Russian wendeswing with 360</td>
      </tr>
      <tr>
        <td>172</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>B</td>
        <td>104</td>
        <td>On the leather , Russian wendeswing with 360° or 540°.</td>
      </tr>
      <tr>
        <td>173</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>B</td>
        <td>110</td>
        <td>Russian wendeswing with 180° or 270° on 1 p. or between the pommels.</td>
      </tr>
      <tr>
        <td>174</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>C</td>
        <td>99</td>
        <td>Russian wendeswing with 720</td>
      </tr>
      <tr>
        <td>175</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>C</td>
        <td>105</td>
        <td>On the leather, Russian wendeswing with 720° or 900°.</td>
      </tr>
      <tr>
        <td>176</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>C</td>
        <td>111</td>
        <td>Russian wendeswing with 360° pommel or between the pommels.</td>
      </tr>
      <tr>
        <td>177</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>D</td>
        <td>100</td>
        <td>Russian wendeswing with 1080° or more.</td>
      </tr>
      <tr>
        <td>178</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>D</td>
        <td>106</td>
        <td>On the leather, Russian wendeswing with 1080° or more.</td>
      </tr>
      <tr>
        <td>179</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>D</td>
        <td>112</td>
        <td>720° mel or between the pommels.</td>
      </tr>
      <tr>
        <td>180</td>
        <td>Pommel Horse</td>
        <td>2</td>
        <td>E</td>
        <td>113</td>
        <td>1080º Russian wendeswing or more on 1 pommel or between the pommels.</td>
      </tr>
      <tr>
        <td>181</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>A</td>
        <td>1</td>
        <td>Circles with travel fwd. in side support (also with ¼ t.).</td>
      </tr>
      <tr>
        <td>182</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>A</td>
        <td>13</td>
        <td>Circles with travel bwd. in side support.</td>
      </tr>
      <tr>
        <td>183</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>B</td>
        <td>2</td>
        <td>Circles with travel fwd. in side support (3/3).</td>
      </tr>
      <tr>
        <td>184</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>B</td>
        <td>8</td>
        <td>Circles with hop travel fwd. in side support.</td>
      </tr>
      <tr>
        <td>185</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>B</td>
        <td>14</td>
        <td>Circles with travel bwd. in side support (3/3).</td>
      </tr>
      <tr>
        <td>186</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>B</td>
        <td>20</td>
        <td>Circles with travel bwd. with hop.</td>
      </tr>
      <tr>
        <td>187</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>C</td>
        <td>3</td>
        <td>Circles with travel fwd. in side support (3/3), hands between pommels.</td>
      </tr>
      <tr>
        <td>188</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>C</td>
        <td>9</td>
        <td>Circles with hop tr. fwd. 2x in side support (3/3).</td>
      </tr>
      <tr>
        <td>189</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>C</td>
        <td>15</td>
        <td>Circles with travel bwd. in side support (3/3), hands between pommels.</td>
      </tr>
      <tr>
        <td>190</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>C</td>
        <td>21</td>
        <td>Circles with travel bwd. with hop 2x.</td>
      </tr>
      <tr>
        <td>191</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>D</td>
        <td>4</td>
        <td>From side sup. on 1 end., travel fwd. over both p. to sup. on other end (3/3) in 1 circle.</td>
      </tr>
      <tr>
        <td>192</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>D</td>
        <td>10</td>
        <td>From sup. frontways on one end, travel hop over both p. to sup. frontways on other end.</td>
      </tr>
      <tr>
        <td>193</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>D</td>
        <td>16</td>
        <td>From side sup. on 1 end., travel bwd. over both p. to side sup. on the other end (3/3) in 2 circles w.</td>
      </tr>
      <tr>
        <td>194</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>D</td>
        <td>22</td>
        <td>From side support on one end, travel hop over both p. to sup. frways on other end (1-2 to 4-5).</td>
      </tr>
      <tr>
        <td>195</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>E</td>
        <td>23</td>
        <td>From side sup. beside the p., travel hop o. 2 p. to sup. fwd on other end (1-1 to 5-5).(Yamawaki)</td>
      </tr>
      <tr>
        <td>196</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>B</td>
        <td>26</td>
        <td>All travels with ½ spindle in cross support (1/3 travel).½</td>
      </tr>
      <tr>
        <td>197</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>B</td>
        <td>32</td>
        <td>Travel fwd. or bwd. with ¼ spindle to side support.</td>
      </tr>
      <tr>
        <td>198</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>B</td>
        <td>44</td>
        <td>Travel fwd. in cross support (½ or 2/3).</td>
      </tr>
      <tr>
        <td>199</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>C</td>
        <td>27</td>
        <td>All travels with ½ spindle in cross support (½ or 2/3 travel).½</td>
      </tr>
      <tr>
        <td>200</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>C</td>
        <td>33</td>
        <td>All travels with ½ spindle in side support. ½</td>
      </tr>
      <tr>
        <td>201</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>C</td>
        <td>45</td>
        <td>Travel fwd. in cross support with support on leather, pommel, pommel, leather(3/3) (1-2-4-5).</td>
      </tr>
      <tr>
        <td>202</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>D</td>
        <td>34</td>
        <td>Cross travel fwd. 3/3 with ½ Spindle from one pommel over the other pommel.(Nin Reyes)</td>
      </tr>
      <tr>
        <td>203</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>D</td>
        <td>46</td>
        <td>Any other travel fwd. in cross support to other end (3/3).(Magyar)</td>
      </tr>
      <tr>
        <td>204</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>E</td>
        <td>29</td>
        <td>From an end side travel with 2x other end.</td>
      </tr>
      <tr>
        <td>205</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>E</td>
        <td>35</td>
        <td>Travel 3/3 over both pommels with ½ Spindle.½ pívot.(Nin Reyes 2)</td>
      </tr>
      <tr>
        <td>206</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>E</td>
        <td>41</td>
        <td>3/3 cross support travel fwd. with hop. (Driggs)</td>
      </tr>
      <tr>
        <td>207</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>E</td>
        <td>47</td>
        <td>3/3 cross support travel fwd. in flairs.</td>
      </tr>
      <tr>
        <td>208</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>A</td>
        <td>55</td>
        <td>Travel bwd. in cross sup. from one horse part or pommel to another (?).?</td>
      </tr>
      <tr>
        <td>209</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>B</td>
        <td>56</td>
        <td>Travel bwd. in cross support (½ or 2/3).</td>
      </tr>
      <tr>
        <td>210</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>C</td>
        <td>51</td>
        <td>Fr. cr. sup. on end, tr. fwd. in 2 circles to 12nd p., with ¼ turn to side sup. on other end (3/3(Bilozerchev)</td>
      </tr>
      <tr>
        <td>211</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>C</td>
        <td>57</td>
        <td>Travel bwd. in cross sup with support on leather, pommel, pommel, leather(3/3) (5-4-2-1).</td>
      </tr>
      <tr>
        <td>212</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>C</td>
        <td>63</td>
        <td>From support on end, kehr fwd. around 1Stöckli around 2nd p. to side sup., p. betw. hands. (Urzica)</td>
      </tr>
      <tr>
        <td>213</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>D</td>
        <td>58</td>
        <td>Any other travel bwd. in cross support to other end (3/3).(Sivado)</td>
      </tr>
      <tr>
        <td>214</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>D</td>
        <td>64</td>
        <td>p., rev. (Moguilny)Kehre fwd., rev. Stöckli, kehre fwd.</td>
      </tr>
      <tr>
        <td>215</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>D</td>
        <td>70</td>
        <td>(Belenki)Kehre bwd., kehre fwd., kehre bwd.</td>
      </tr>
      <tr>
        <td>216</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>E</td>
        <td>59</td>
        <td>Any other travel bwd. in cross support to other end (3/3) in flairs.</td>
      </tr>
      <tr>
        <td>217</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>C</td>
        <td>75</td>
        <td>From sup. on 1 p., Russian wendeswing fwd. to other end without sup. on or btw. the p. (side to side support, side to cross support, cross to side support).</td>
      </tr>
      <tr>
        <td>218</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>C</td>
        <td>81</td>
        <td>From side support pommel between hand, rus-sian wendeswing 360º with travel to the other end in side support.(Kroll)</td>
      </tr>
      <tr>
        <td>219</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>D</td>
        <td>76</td>
        <td>From sup. on end, Russian wendeswing fwd. to other end without sup. on or btw. the p. (side to side support, side to cross, cross to side, cross to cross) with full circle after.</td>
      </tr>
      <tr>
        <td>220</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>D</td>
        <td>82</td>
        <td>Any Russian wend. with 360(Tong Fei)(Roth)</td>
      </tr>
      <tr>
        <td>221</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>D</td>
        <td>88</td>
        <td>Reverse Stöckli from cross support on one end to the other.</td>
      </tr>
      <tr>
        <td>222</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>E</td>
        <td>83</td>
        <td>Any 3/3 travel in Russian type wendeswing with 720(Wu Guonian)</td>
      </tr>
      <tr>
        <td>223</td>
        <td>Pommel Horse</td>
        <td>3</td>
        <td>E</td>
        <td>89</td>
        <td>On the leather, from cross support, Russian wendeswing with 360° or 540º over both pom-mels. (Vammen)</td>
      </tr>
      <tr>
        <td>224</td>
        <td>Pommel Horse</td>
        <td>4</td>
        <td>A</td>
        <td>1</td>
        <td>Wende (from circle or flair).</td>
      </tr>
      <tr>
        <td>225</td>
        <td>Pommel Horse</td>
        <td>4</td>
        <td>B</td>
        <td>2</td>
        <td>Chaguinian to wende.</td>
      </tr>
      <tr>
        <td>226</td>
        <td>Pommel Horse</td>
        <td>4</td>
        <td>B</td>
        <td>8</td>
        <td>On the end, Russian wendeswing with 360°</td>
      </tr>
      <tr>
        <td>227</td>
        <td>Pommel Horse</td>
        <td>4</td>
        <td>B</td>
        <td>14</td>
        <td>Fr. s. sup. fw., wendeswing fwd. w. ½ t. to sup. fw. followed by Schwabenflank a. wende off.</td>
      </tr>
      <tr>
        <td>228</td>
        <td>Pommel Horse</td>
        <td>4</td>
        <td>B</td>
        <td>20</td>
        <td>Circle or flair through hdst. (also with ¾ t. with or without travel).</td>
      </tr>
      <tr>
        <td>229</td>
        <td>Pommel Horse</td>
        <td>4</td>
        <td>C</td>
        <td>9</td>
        <td>On the end, Russian wend. with 720°</td>
      </tr>
      <tr>
        <td>230</td>
        <td>Pommel Horse</td>
        <td>4</td>
        <td>C</td>
        <td>15</td>
        <td>DSA, rev. Stöckli or circle on one pommel through hdst.</td>
      </tr>
      <tr>
        <td>231</td>
        <td>Pommel Horse</td>
        <td>4</td>
        <td>C</td>
        <td>21</td>
        <td>Circle or flair with hop travel bwd. thr. hdst.</td>
      </tr>
      <tr>
        <td>232</td>
        <td>Pommel Horse</td>
        <td>4</td>
        <td>D</td>
        <td>4</td>
        <td>From side sup. on end, circle or flair to hdst. and travel 3/3 with 450° or more turn.(Kolyvanov)</td>
      </tr>
      <tr>
        <td>233</td>
        <td>Pommel Horse</td>
        <td>4</td>
        <td>D</td>
        <td>10</td>
        <td>On the end, Russian wendeswing with 1080º or more.</td>
      </tr>
      <tr>
        <td>234</td>
        <td>Pommel Horse</td>
        <td>4</td>
        <td>D</td>
        <td>16</td>
        <td>DSA with hop bwd. through hdst.</td>
      </tr>
      <tr>
        <td>235</td>
        <td>Pommel Horse</td>
        <td>4</td>
        <td>E</td>
        <td>5</td>
        <td>DSA to hdst. 3/3 with 450º or more turn.</td>
      </tr>
      <tr>
        <td>236</td>
        <td>Rings</td>
        <td>1</td>
        <td>A</td>
        <td>1</td>
        <td>Uprise fwd. to support.</td>
      </tr>
      <tr>
        <td>237</td>
        <td>Rings</td>
        <td>1</td>
        <td>A</td>
        <td>7</td>
        <td>Swing bwd in support, fall to bwd swing in hang.</td>
      </tr>
      <tr>
        <td>238</td>
        <td>Rings</td>
        <td>1</td>
        <td>A</td>
        <td>13</td>
        <td>From hang, underswing w. shoulders above rings.</td>
      </tr>
      <tr>
        <td>239</td>
        <td>Rings</td>
        <td>1</td>
        <td>B</td>
        <td>8</td>
        <td>#1 and counter salto fwd. to bwd swing in hang. (also from Li Ning).</td>
      </tr>
      <tr>
        <td>240</td>
        <td>Rings</td>
        <td>1</td>
        <td>B</td>
        <td>20</td>
        <td>From a hang or support, back toss to hang rw. to uprise fwd. to support.(Li Ning)(Li Ning 2)</td>
      </tr>
      <tr>
        <td>241</td>
        <td>Rings</td>
        <td>1</td>
        <td>A</td>
        <td>25</td>
        <td>From hang, felge upward to support.</td>
      </tr>
      <tr>
        <td>242</td>
        <td>Rings</td>
        <td>1</td>
        <td>A</td>
        <td>31</td>
        <td>Dislocate bwd. piked or stretched.</td>
      </tr>
      <tr>
        <td>243</td>
        <td>Rings</td>
        <td>1</td>
        <td>A</td>
        <td>37</td>
        <td>Uprise bwd. to support.</td>
      </tr>
      <tr>
        <td>244</td>
        <td>Rings</td>
        <td>1</td>
        <td>A</td>
        <td>43</td>
        <td>Inlocate piked or stretched.</td>
      </tr>
      <tr>
        <td>245</td>
        <td>Rings</td>
        <td>1</td>
        <td>B</td>
        <td>26</td>
        <td>Swing fwd. with straight arms through hdst.</td>
      </tr>
      <tr>
        <td>246</td>
        <td>Rings</td>
        <td>1</td>
        <td>B</td>
        <td>32</td>
        <td>Felge upward to support with straddled legs supported above the rings (2 s.).(Deltchev)</td>
      </tr>
      <tr>
        <td>247</td>
        <td>Rings</td>
        <td>1</td>
        <td>B</td>
        <td>38</td>
        <td>Uprise bwd. or giant swing piked or str. through handstand.</td>
      </tr>
      <tr>
        <td>248</td>
        <td>Rings</td>
        <td>1</td>
        <td>B</td>
        <td>44</td>
        <td>Backward swing to salto fwd. p. to support(Honma)</td>
      </tr>
      <tr>
        <td>249</td>
        <td>Rings</td>
        <td>1</td>
        <td>C</td>
        <td>27</td>
        <td>Tucked double felge bwd. to hang. (Guczoghy)</td>
      </tr>
      <tr>
        <td>250</td>
        <td>Rings</td>
        <td>1</td>
        <td>C</td>
        <td>45</td>
        <td>.Honma stretched.</td>
      </tr>
      <tr>
        <td>251</td>
        <td>Rings</td>
        <td>1</td>
        <td>D</td>
        <td>28</td>
        <td>Piked double felge bwd. to hang.</td>
      </tr>
      <tr>
        <td>252</td>
        <td>Rings</td>
        <td>1</td>
        <td>E</td>
        <td>29</td>
        <td>Stretched double felge bwd. to hang(O’Neill)</td>
      </tr>
      <tr>
        <td>253</td>
        <td>Rings</td>
        <td>1</td>
        <td>A</td>
        <td>49</td>
        <td>Slow inlocate from hang.</td>
      </tr>
      <tr>
        <td>254</td>
        <td>Rings</td>
        <td>1</td>
        <td>A</td>
        <td>55</td>
        <td>Kip to support.</td>
      </tr>
      <tr>
        <td>255</td>
        <td>Rings</td>
        <td>1</td>
        <td>A</td>
        <td>61</td>
        <td>Back kip to support.</td>
      </tr>
      <tr>
        <td>256</td>
        <td>Rings</td>
        <td>1</td>
        <td>A</td>
        <td>67</td>
        <td>Fwd. swing to swing bwd. in hang.</td>
      </tr>
      <tr>
        <td>257</td>
        <td>Rings</td>
        <td>1</td>
        <td>B</td>
        <td>62</td>
        <td>Back kip with straight arms to support.</td>
      </tr>
      <tr>
        <td>258</td>
        <td>Rings</td>
        <td>1</td>
        <td>B</td>
        <td>68</td>
        <td>Uprise bwd. to straddled L-sit (2 s.).</td>
      </tr>
      <tr>
        <td>259</td>
        <td>Rings</td>
        <td>1</td>
        <td>C</td>
        <td>51</td>
        <td>Double salto fwd. tucked to hang.(Yamawaki)</td>
      </tr>
      <tr>
        <td>260</td>
        <td>Rings</td>
        <td>1</td>
        <td>C</td>
        <td>69</td>
        <td>Bwd. swing, salto fwd tuck or piked to support.</td>
      </tr>
      <tr>
        <td>261</td>
        <td>Rings</td>
        <td>1</td>
        <td>D</td>
        <td>52</td>
        <td>Double salto fwd. piked or stretched to hang.(Jonasson)</td>
      </tr>
      <tr>
        <td>262</td>
        <td>Rings</td>
        <td>1</td>
        <td>A</td>
        <td>73</td>
        <td>From support or cross, felge bwd. piked or stretched to support.</td>
      </tr>
      <tr>
        <td>263</td>
        <td>Rings</td>
        <td>1</td>
        <td>B</td>
        <td>80</td>
        <td>Back kip or roll bwd str. to handstand (2 s.).</td>
      </tr>
      <tr>
        <td>264</td>
        <td>Rings</td>
        <td>1</td>
        <td>B</td>
        <td>92</td>
        <td>From support swing bwd. to handstand (2 s.).</td>
      </tr>
      <tr>
        <td>265</td>
        <td>Rings</td>
        <td>1</td>
        <td>C</td>
        <td>81</td>
        <td>Swing fwd. with straight arms to hdst. (2 s.).</td>
      </tr>
      <tr>
        <td>266</td>
        <td>Rings</td>
        <td>1</td>
        <td>C</td>
        <td>87</td>
        <td>Uprise bwd. or giant swing to handstand with straight arms (2 s.).</td>
      </tr>
      <tr>
        <td>267</td>
        <td>Rings</td>
        <td>1</td>
        <td>C</td>
        <td>93</td>
        <td>Honma and swing bwd. to handstand (2 s.).</td>
      </tr>
      <tr>
        <td>268</td>
        <td>Rings</td>
        <td>1</td>
        <td>D</td>
        <td>94</td>
        <td>Honma str. and swing bwd. to handstand (2 s.).</td>
      </tr>
      <tr>
        <td>269</td>
        <td>Rings</td>
        <td>2</td>
        <td>A</td>
        <td>1</td>
        <td>L-sit (2 s.) or straddled L-sit (2 s.).</td>
      </tr>
      <tr>
        <td>270</td>
        <td>Rings</td>
        <td>2</td>
        <td>A</td>
        <td>7</td>
        <td>Hanging scale rearways (back lever) (2 s.)</td>
      </tr>
      <tr>
        <td>271</td>
        <td>Rings</td>
        <td>2</td>
        <td>A</td>
        <td>13</td>
        <td>Hanging scale frontways (front lever) (2 s.).</td>
      </tr>
      <tr>
        <td>272</td>
        <td>Rings</td>
        <td>2</td>
        <td>B</td>
        <td>2</td>
        <td>V-sit (2 s.).</td>
      </tr>
      <tr>
        <td>273</td>
        <td>Rings</td>
        <td>2</td>
        <td>B</td>
        <td>8</td>
        <td>Support scale straddled (2 s.).</td>
      </tr>
      <tr>
        <td>274</td>
        <td>Rings</td>
        <td>2</td>
        <td>B</td>
        <td>14</td>
        <td>Any cross (2 s.).</td>
      </tr>
      <tr>
        <td>275</td>
        <td>Rings</td>
        <td>2</td>
        <td>C</td>
        <td>3</td>
        <td>Inverted cross (2 s.).</td>
      </tr>
      <tr>
        <td>276</td>
        <td>Rings</td>
        <td>2</td>
        <td>C</td>
        <td>9</td>
        <td>Support scale (planche)(2 s.).</td>
      </tr>
      <tr>
        <td>277</td>
        <td>Rings</td>
        <td>2</td>
        <td>C</td>
        <td>15</td>
        <td>V cross (2 s.).</td>
      </tr>
      <tr>
        <td>278</td>
        <td>Rings</td>
        <td>2</td>
        <td>D</td>
        <td>4</td>
        <td>Press from inverted cross to handstand (2 s.).</td>
      </tr>
      <tr>
        <td>279</td>
        <td>Rings</td>
        <td>2</td>
        <td>D</td>
        <td>10</td>
        <td>Support scale at ring height (swallow or maltese cross) (2 s.).(Hirondelle)</td>
      </tr>
      <tr>
        <td>280</td>
        <td>Rings</td>
        <td>2</td>
        <td>D</td>
        <td>22</td>
        <td>V Cross, press to V-sit (2 sec.). De cristo p. vert. subir a ángulo p. vert. (2 s.)(Tsukahara 3)</td>
      </tr>
      <tr>
        <td>281</td>
        <td>Rings</td>
        <td>2</td>
        <td>E</td>
        <td>11</td>
        <td>Inverted swallow (2 s.).</td>
      </tr>
      <tr>
        <td>282</td>
        <td>Rings</td>
        <td>2</td>
        <td>A</td>
        <td>25</td>
        <td>Press to hdst. with bent body and bent arms (2 s).- Also straddle legs.</td>
      </tr>
      <tr>
        <td>283</td>
        <td>Rings</td>
        <td>2</td>
        <td>A</td>
        <td>31</td>
        <td>Slow roll fwd. piked to support.</td>
      </tr>
      <tr>
        <td>284</td>
        <td>Rings</td>
        <td>2</td>
        <td>B</td>
        <td>26</td>
        <td>Press to hdst. with str. body a. bent arms or b. body. a. str. arms, or fr. strad. sup. lever (2 s.).</td>
      </tr>
      <tr>
        <td>285</td>
        <td>Rings</td>
        <td>2</td>
        <td>B</td>
        <td>32</td>
        <td>Slow roll fwd. stretched to support.</td>
      </tr>
      <tr>
        <td>286</td>
        <td>Rings</td>
        <td>2</td>
        <td>B</td>
        <td>38</td>
        <td>Slow roll bwd. slowly with str. arms and str. body to L sit (2 s.).</td>
      </tr>
      <tr>
        <td>287</td>
        <td>Rings</td>
        <td>2</td>
        <td>C</td>
        <td>27</td>
        <td>Press to hdst. with str. body and str. arms or from sup. lever (2 s.).</td>
      </tr>
      <tr>
        <td>288</td>
        <td>Rings</td>
        <td>2</td>
        <td>C</td>
        <td>33</td>
        <td>Slow roll fwd. stretched with straight arms to handstand (2 s.).</td>
      </tr>
      <tr>
        <td>289</td>
        <td>Rings</td>
        <td>2</td>
        <td>C</td>
        <td>39</td>
        <td>Slow roll fwd. stretched (bent or straight arms)to cross or L-cross (2 s.).</td>
      </tr>
      <tr>
        <td>290</td>
        <td>Rings</td>
        <td>2</td>
        <td>D</td>
        <td>28</td>
        <td>Press to hdst. with str. body and str. arms from swallow (2 s.).</td>
      </tr>
      <tr>
        <td>291</td>
        <td>Rings</td>
        <td>2</td>
        <td>D</td>
        <td>34</td>
        <td>Slow roll fwd. stretched with straight arms to inverted cross (2 s.).</td>
      </tr>
      <tr>
        <td>292</td>
        <td>Rings</td>
        <td>2</td>
        <td>D</td>
        <td>40</td>
        <td>Pull with straight arms and body through mo-mentary front lever to cross or L-cross (2 s.).(Pineda)</td>
      </tr>
      <tr>
        <td>293</td>
        <td>Rings</td>
        <td>2</td>
        <td>D</td>
        <td>46</td>
        <td>(Pham)</td>
      </tr>
      <tr>
        <td>294</td>
        <td>Rings</td>
        <td>2</td>
        <td>E</td>
        <td>29</td>
        <td>Pineda to inverted Cross (2 s.).(Petrounias)</td>
      </tr>
      <tr>
        <td>295</td>
        <td>Rings</td>
        <td>2</td>
        <td>E</td>
        <td>41</td>
        <td>Pineda to V cross (2 s.).(Tsukahara 2)</td>
      </tr>
      <tr>
        <td>296</td>
        <td>Rings</td>
        <td>2</td>
        <td>E</td>
        <td>47</td>
        <td>Pull with straight body and arms through mo-ment. front lever to swallow (2 s.).(Bhavsar)</td>
      </tr>
      <tr>
        <td>297</td>
        <td>Rings</td>
        <td>2</td>
        <td>B</td>
        <td>50</td>
        <td>Vertical pull up with bent arms to hanging scale rearways (2 s.).</td>
      </tr>
      <tr>
        <td>298</td>
        <td>Rings</td>
        <td>2</td>
        <td>B</td>
        <td>56</td>
        <td>Fr. cross or L-cr., turn fwd. to back lever (2 s.).</td>
      </tr>
      <tr>
        <td>299</td>
        <td>Rings</td>
        <td>2</td>
        <td>B</td>
        <td>62</td>
        <td>From hdst., lower horiz. to back lever (2 s.).</td>
      </tr>
      <tr>
        <td>300</td>
        <td>Rings</td>
        <td>2</td>
        <td>B</td>
        <td>68</td>
        <td>From handstand, lower slowly with straight arms through inverted cross to inverted hang.</td>
      </tr>
      <tr>
        <td>301</td>
        <td>Rings</td>
        <td>2</td>
        <td>C</td>
        <td>51</td>
        <td>Vertical pull up with straight arms to hanging scale rearways (2 s.)</td>
      </tr>
      <tr>
        <td>302</td>
        <td>Rings</td>
        <td>2</td>
        <td>C</td>
        <td>57</td>
        <td>Vertical pull up with straight arms to L-sit (2 s.)</td>
      </tr>
      <tr>
        <td>303</td>
        <td>Rings</td>
        <td>2</td>
        <td>C</td>
        <td>63</td>
        <td>From sup. or cross, lower slowly with str. arms to hang, and pull with str. arms to cross (2 s.).(Li Xiaoshuang)</td>
      </tr>
      <tr>
        <td>304</td>
        <td>Rings</td>
        <td>2</td>
        <td>D</td>
        <td>52</td>
        <td>Roll bwd. slowly with str. arms and body to cross or L-cross (2 s.).(Azarian)</td>
      </tr>
      <tr>
        <td>305</td>
        <td>Rings</td>
        <td>2</td>
        <td>D</td>
        <td>58</td>
        <td>From or through hanging scale rearways, with straight arms pull to cross or L-cross (2 s.).(Nakayama)</td>
      </tr>
      <tr>
        <td>306</td>
        <td>Rings</td>
        <td>2</td>
        <td>D</td>
        <td>64</td>
        <td>Vertical pull up with straight arms to cross or L-cross (2 s.).</td>
      </tr>
      <tr>
        <td>307</td>
        <td>Rings</td>
        <td>2</td>
        <td>D</td>
        <td>70</td>
        <td>From swallow, press to support scale (2 s.).</td>
      </tr>
      <tr>
        <td>308</td>
        <td>Rings</td>
        <td>2</td>
        <td>E</td>
        <td>53</td>
        <td>Azarian to V Cross (2 s.).(Tay)</td>
      </tr>
      <tr>
        <td>309</td>
        <td>Rings</td>
        <td>2</td>
        <td>E</td>
        <td>59</td>
        <td>Nakayama to V cross (2 s.).(NG Kiu Chung)</td>
      </tr>
      <tr>
        <td>310</td>
        <td>Rings</td>
        <td>2</td>
        <td>E</td>
        <td>65</td>
        <td>From planche, lower horiz. and slowly to hang-ing scale rw. and press to swallow (2 s.) or from swallow same to planche or planche to planche.(Van Gelder)</td>
      </tr>
      <tr>
        <td>311</td>
        <td>Rings</td>
        <td>2</td>
        <td>E</td>
        <td>71</td>
        <td>From swallow , lower slowly to handing scale, press to swallow (2 s.).</td>
      </tr>
      <tr>
        <td>312</td>
        <td>Rings</td>
        <td>2</td>
        <td>F</td>
        <td>60</td>
        <td>Through hanging scale rearways (no hold re-quired) pull with str. body through cross to inv. swallow (2 s.). (Zahran)</td>
      </tr>
      <tr>
        <td>313</td>
        <td>Rings</td>
        <td>2</td>
        <td>F</td>
        <td>72</td>
        <td>From hanging scale rw. press to swallow (also to Support Scale) (2 s.).(Zanetti)</td>
      </tr>
      <tr>
        <td>314</td>
        <td>Rings</td>
        <td>2</td>
        <td>C</td>
        <td>75</td>
        <td>From L-sit, press to inverted cross (2 s.).</td>
      </tr>
      <tr>
        <td>315</td>
        <td>Rings</td>
        <td>2</td>
        <td>C</td>
        <td>81</td>
        <td>From cross or L-cross, press to L-sit (2 s.</td>
      </tr>
      <tr>
        <td>316</td>
        <td>Rings</td>
        <td>2</td>
        <td>D</td>
        <td>76</td>
        <td>From L-cross, press to inverted cross (2 s.).</td>
      </tr>
      <tr>
        <td>317</td>
        <td>Rings</td>
        <td>2</td>
        <td>D</td>
        <td>82</td>
        <td>From support lever, press to inverted cross (2 s.).</td>
      </tr>
      <tr>
        <td>318</td>
        <td>Rings</td>
        <td>2</td>
        <td>D</td>
        <td>88</td>
        <td>From cross, press to planche without first going to support (2 s.).</td>
      </tr>
      <tr>
        <td>319</td>
        <td>Rings</td>
        <td>2</td>
        <td>D</td>
        <td>94</td>
        <td>From inverted cross lower slowly to inverted hang and felge bwd. slowly to cross (2 s.).(Vorobiov))</td>
      </tr>
      <tr>
        <td>320</td>
        <td>Rings</td>
        <td>2</td>
        <td>E</td>
        <td>77</td>
        <td>From cross, press with straight body to inverted cross (2 s.).</td>
      </tr>
      <tr>
        <td>321</td>
        <td>Rings</td>
        <td>2</td>
        <td>E</td>
        <td>83</td>
        <td>From swallow, press to inverted cross (2 s.).</td>
      </tr>
      <tr>
        <td>322</td>
        <td>Rings</td>
        <td>2</td>
        <td>E</td>
        <td>89</td>
        <td>From cross, press to swallow (2 s.).</td>
      </tr>
      <tr>
        <td>323</td>
        <td>Rings</td>
        <td>2</td>
        <td>E</td>
        <td>95</td>
        <td>From inverted cross lower slowly to inverted hang and felge bwd. slowly to swallow (2 s.).(Jotchev)</td>
      </tr>
      <tr>
        <td>324</td>
        <td>Rings</td>
        <td>2</td>
        <td>D</td>
        <td>106</td>
        <td>Slowly roll fwd. str. w. str. arms through Cross and press to planche without first going to support (2 s.).(Ng Kiu Chung 2)</td>
      </tr>
      <tr>
        <td>325</td>
        <td>Rings</td>
        <td>2</td>
        <td>D</td>
        <td>112</td>
        <td>Slow roll fwd. with str. body and arms to Cross or L-Cross (2 s.), also from inverted hang.(Davtyan)</td>
      </tr>
      <tr>
        <td>326</td>
        <td>Rings</td>
        <td>2</td>
        <td>E</td>
        <td>101</td>
        <td>Roll bwd. slowly with str. arms and body to free sup. scale (2 s.)(Yan Mijayoung)</td>
      </tr>
      <tr>
        <td>327</td>
        <td>Rings</td>
        <td>2</td>
        <td>E</td>
        <td>107</td>
        <td>From hang vertical pull up with straight arms to (Balandin 1)</td>
      </tr>
      <tr>
        <td>328</td>
        <td>Rings</td>
        <td>2</td>
        <td>E</td>
        <td>119</td>
        <td>Slow roll fwd. with straight body and arms through cross to inverted cross (2 s.).(Wynn)</td>
      </tr>
      <tr>
        <td>329</td>
        <td>Rings</td>
        <td>2</td>
        <td>F</td>
        <td>102</td>
        <td>Roll bwd. slowly with str. arms and body to swallow (2 s.).</td>
      </tr>
      <tr>
        <td>330</td>
        <td>Rings</td>
        <td>2</td>
        <td>F</td>
        <td>108</td>
        <td>Azarian to inverted Swallow (2 s.).(Tulloch)</td>
      </tr>
      <tr>
        <td>331</td>
        <td>Rings</td>
        <td>2</td>
        <td>F</td>
        <td>114</td>
        <td>Through hang rearways press with straight arms and straight body to inverted cross (2 s.).(Carmona)</td>
      </tr>
      <tr>
        <td>332</td>
        <td>Rings</td>
        <td>2</td>
        <td>F</td>
        <td>120</td>
        <td>From hang vertical pull up with straight arms to (2 s.).(Balandin 2)</td>
      </tr>
      <tr>
        <td>333</td>
        <td>Rings</td>
        <td>3</td>
        <td>B</td>
        <td>2</td>
        <td>Uprise fwd. to L-sit, (2 s.).</td>
      </tr>
      <tr>
        <td>334</td>
        <td>Rings</td>
        <td>3</td>
        <td>B</td>
        <td>8</td>
        <td>Kip to L-sit (2 s.).</td>
      </tr>
      <tr>
        <td>335</td>
        <td>Rings</td>
        <td>3</td>
        <td>B</td>
        <td>14</td>
        <td>Backward swing to salto fwd. p. to L-sit (2 s.).(Honma)</td>
      </tr>
      <tr>
        <td>336</td>
        <td>Rings</td>
        <td>3</td>
        <td>C</td>
        <td>3</td>
        <td>Uprise fwd. to V-sit (2 s.).</td>
      </tr>
      <tr>
        <td>337</td>
        <td>Rings</td>
        <td>3</td>
        <td>C</td>
        <td>9</td>
        <td>Kip to V-sit (2 s.).</td>
      </tr>
      <tr>
        <td>338</td>
        <td>Rings</td>
        <td>3</td>
        <td>D</td>
        <td>16</td>
        <td>Salto fwd. betw. rings direc. to cross / L-cross (2 s.).</td>
      </tr>
      <tr>
        <td>339</td>
        <td>Rings</td>
        <td>3</td>
        <td>D</td>
        <td>22</td>
        <td>Bwd. swing, salto fwd p. to cross or L- cross (2 s.).</td>
      </tr>
      <tr>
        <td>340</td>
        <td>Rings</td>
        <td>3</td>
        <td>E</td>
        <td>17</td>
        <td>Salto fwd. between rings directly to V cross (2 s.).(Tanaka)</td>
      </tr>
      <tr>
        <td>341</td>
        <td>Rings</td>
        <td>3</td>
        <td>C</td>
        <td>27</td>
        <td>Uprise fwd. to cross or L-cross (2 s.).</td>
      </tr>
      <tr>
        <td>342</td>
        <td>Rings</td>
        <td>3</td>
        <td>C</td>
        <td>33</td>
        <td>Uprise bwd. to cross or L-cross (2 s.).</td>
      </tr>
      <tr>
        <td>343</td>
        <td>Rings</td>
        <td>3</td>
        <td>C</td>
        <td>39</td>
        <td>Li Ning or Li Ning 2 to cross or L-cross (2 s.).</td>
      </tr>
      <tr>
        <td>344</td>
        <td>Rings</td>
        <td>3</td>
        <td>C</td>
        <td>45</td>
        <td>Felge upward to cross or L-cross (2 s.).</td>
      </tr>
      <tr>
        <td>345</td>
        <td>Rings</td>
        <td>3</td>
        <td>D</td>
        <td>40</td>
        <td>(Tsukahara) Li Ning or Li Ning 2 to V Cross (2 s.).</td>
      </tr>
      <tr>
        <td>346</td>
        <td>Rings</td>
        <td>3</td>
        <td>D</td>
        <td>46</td>
        <td>Kip to V cross (2 s.).(Molinari)</td>
      </tr>
      <tr>
        <td>347</td>
        <td>Rings</td>
        <td>3</td>
        <td>E</td>
        <td>47</td>
        <td>Felge upward to sup. scale at ring height (2 s.).</td>
      </tr>
      <tr>
        <td>348</td>
        <td>Rings</td>
        <td>3</td>
        <td>F</td>
        <td>48</td>
        <td>Uprise fwd. to inv. swallow w.o. supp. phase (2 s.).(Rodrigues)</td>
      </tr>
      <tr>
        <td>349</td>
        <td>Rings</td>
        <td>3</td>
        <td>C</td>
        <td>51</td>
        <td>Kip to cross, or L-cross (2 s.).</td>
      </tr>
      <tr>
        <td>350</td>
        <td>Rings</td>
        <td>3</td>
        <td>C</td>
        <td>57</td>
        <td>Back kip to cross or L-cross (2 s.).</td>
      </tr>
      <tr>
        <td>351</td>
        <td>Rings</td>
        <td>3</td>
        <td>C</td>
        <td>63</td>
        <td>Felge upward to support scale straddled (2 s.).</td>
      </tr>
      <tr>
        <td>352</td>
        <td>Rings</td>
        <td>3</td>
        <td>C</td>
        <td>69</td>
        <td>Uprise bwd. to support scale straddled (2 s.).</td>
      </tr>
      <tr>
        <td>353</td>
        <td>Rings</td>
        <td>3</td>
        <td>D</td>
        <td>52</td>
        <td>Back Uprise to V Cross (2 s.).(Kato)</td>
      </tr>
      <tr>
        <td>354</td>
        <td>Rings</td>
        <td>3</td>
        <td>D</td>
        <td>64</td>
        <td>Felge upward to support scale (2 s.).</td>
      </tr>
      <tr>
        <td>355</td>
        <td>Rings</td>
        <td>3</td>
        <td>D</td>
        <td>70</td>
        <td>Uprise bwd. to support scale (2 s.).</td>
      </tr>
      <tr>
        <td>356</td>
        <td>Rings</td>
        <td>3</td>
        <td>E</td>
        <td>53</td>
        <td>Uprise bwd. to sup. scale at ring height (2 s.).</td>
      </tr>
      <tr>
        <td>357</td>
        <td>Rings</td>
        <td>3</td>
        <td>E</td>
        <td>59</td>
        <td>Back kip to support scale at ring height (2 s.).</td>
      </tr>
      <tr>
        <td>358</td>
        <td>Rings</td>
        <td>3</td>
        <td>F</td>
        <td>54</td>
        <td>Kip to inverted swallow (2 s.).</td>
      </tr>
      <tr>
        <td>359</td>
        <td>Rings</td>
        <td>3</td>
        <td>C</td>
        <td>75</td>
        <td>Back kip to support scale straddled (2 s.).</td>
      </tr>
      <tr>
        <td>360</td>
        <td>Rings</td>
        <td>3</td>
        <td>D</td>
        <td>76</td>
        <td>Back kip to support scale (2 s.).</td>
      </tr>
      <tr>
        <td>361</td>
        <td>Rings</td>
        <td>3</td>
        <td>D</td>
        <td>82</td>
        <td>Felge bwd. stretched to free sup. scale (2 s.).</td>
      </tr>
      <tr>
        <td>362</td>
        <td>Rings</td>
        <td>3</td>
        <td>D</td>
        <td>88</td>
        <td>Felge upward with straight arms to invert. cross (2 s.).</td>
      </tr>
      <tr>
        <td>363</td>
        <td>Rings</td>
        <td>3</td>
        <td>D</td>
        <td>94</td>
        <td>Uprise bwd. to inverted cross (2 s.).</td>
      </tr>
      <tr>
        <td>364</td>
        <td>Rings</td>
        <td>3</td>
        <td>D</td>
        <td>100</td>
        <td>Back kip to inverted cross (2 s.).</td>
      </tr>
      <tr>
        <td>365</td>
        <td>Rings</td>
        <td>4</td>
        <td>A</td>
        <td>1</td>
        <td>Salto fwd. piked or stretched.</td>
      </tr>
      <tr>
        <td>366</td>
        <td>Rings</td>
        <td>4</td>
        <td>A</td>
        <td>19</td>
        <td>Uprise bwd. and salto bwd t.</td>
      </tr>
      <tr>
        <td>367</td>
        <td>Rings</td>
        <td>4</td>
        <td>B</td>
        <td>2</td>
        <td>Salto fwd. piked or stretched with ½ t.</td>
      </tr>
      <tr>
        <td>368</td>
        <td>Rings</td>
        <td>4</td>
        <td>B</td>
        <td>20</td>
        <td>Uprise bwd. and salto bwd p. or str.(Köste)</td>
      </tr>
      <tr>
        <td>369</td>
        <td>Rings</td>
        <td>4</td>
        <td>C</td>
        <td>3</td>
        <td>Salto fwd. piked or stretched with 1/1 or 3/2 t.</td>
      </tr>
      <tr>
        <td>370</td>
        <td>Rings</td>
        <td>4</td>
        <td>C</td>
        <td>9</td>
        <td>Double salto fwd. tucked or tucked with ½ t.</td>
      </tr>
      <tr>
        <td>371</td>
        <td>Rings</td>
        <td>4</td>
        <td>C</td>
        <td>21</td>
        <td>Uprise bwd. and salto bwd str. with 1/1 t.</td>
      </tr>
      <tr>
        <td>372</td>
        <td>Rings</td>
        <td>4</td>
        <td>D</td>
        <td>4</td>
        <td>Salto fwd. piked or stretched with 2/1 t.</td>
      </tr>
      <tr>
        <td>373</td>
        <td>Rings</td>
        <td>4</td>
        <td>D</td>
        <td>10</td>
        <td>Double salto fwd. tucked with 3/2 t (also 1/1 t.).(Fischer)</td>
      </tr>
      <tr>
        <td>374</td>
        <td>Rings</td>
        <td>4</td>
        <td>D</td>
        <td>16</td>
        <td>Double salto fwd. piked or piked with ½ t.(Balabanov)</td>
      </tr>
      <tr>
        <td>375</td>
        <td>Rings</td>
        <td>4</td>
        <td>E</td>
        <td>17</td>
        <td>Double salto fwd. piked with 3/2 t. (also 1/1 t.).</td>
      </tr>
      <tr>
        <td>376</td>
        <td>Rings</td>
        <td>4</td>
        <td>A</td>
        <td>25</td>
        <td>Salto bwd. piked or stretched.</td>
      </tr>
      <tr>
        <td>377</td>
        <td>Rings</td>
        <td>4</td>
        <td>B</td>
        <td>26</td>
        <td>Salto bwd. stretched with ½ or 1/1 t.</td>
      </tr>
      <tr>
        <td>378</td>
        <td>Rings</td>
        <td>4</td>
        <td>B</td>
        <td>32</td>
        <td>Double salto bwd. tucked or piked.</td>
      </tr>
      <tr>
        <td>379</td>
        <td>Rings</td>
        <td>4</td>
        <td>C</td>
        <td>27</td>
        <td>Salto bwd. stretched with 2/1 t. or 3/2 t.</td>
      </tr>
      <tr>
        <td>380</td>
        <td>Rings</td>
        <td>4</td>
        <td>C</td>
        <td>33</td>
        <td>Double salto bwd. stretched.</td>
      </tr>
      <tr>
        <td>381</td>
        <td>Rings</td>
        <td>4</td>
        <td>C</td>
        <td>39</td>
        <td>½ ou Double salto bwd. t. with ½ or 1/1 t.½ o</td>
      </tr>
      <tr>
        <td>382</td>
        <td>Rings</td>
        <td>4</td>
        <td>C</td>
        <td>45</td>
        <td>Salto bwd. str. with 1/1 t. and salto t.</td>
      </tr>
      <tr>
        <td>383</td>
        <td>Rings</td>
        <td>4</td>
        <td>D</td>
        <td>40</td>
        <td>Double salto bwd. t. with 3/2 t.</td>
      </tr>
      <tr>
        <td>384</td>
        <td>Rings</td>
        <td>4</td>
        <td>D</td>
        <td>46</td>
        <td>Double salto bwd. stretched with ½ or 1/1 t.</td>
      </tr>
      <tr>
        <td>385</td>
        <td>Rings</td>
        <td>4</td>
        <td>E</td>
        <td>29</td>
        <td>Salto bwd. stretched with 3/1 t.</td>
      </tr>
      <tr>
        <td>386</td>
        <td>Rings</td>
        <td>4</td>
        <td>E</td>
        <td>41</td>
        <td>Double salto bwd. t. with 2/1 t.</td>
      </tr>
      <tr>
        <td>387</td>
        <td>Rings</td>
        <td>4</td>
        <td>G</td>
        <td>36</td>
        <td>Triple salto bwd. tucked.</td>
      </tr>
      <tr>
        <td>388</td>
        <td>Rings</td>
        <td>4</td>
        <td>F</td>
        <td>42</td>
        <td>(Tuuha)Double salto bwd. t. with 5/2 t.</td>
      </tr>
      <tr>
        <td>389</td>
        <td>Rings</td>
        <td>4</td>
        <td>F</td>
        <td>48</td>
        <td>Double salto bwd. stretched with 3/2 or 2/1 t.</td>
      </tr>
      <tr>
        <td>390</td>
        <td>Vault</td>
        <td>1</td>
        <td>1.6</td>
        <td>101</td>
        <td>Forward handspring.</td>
      </tr>
      <tr>
        <td>391</td>
        <td>Vault</td>
        <td>1</td>
        <td>2.4</td>
        <td>107</td>
        <td>Handspring fwd. and salto fwd. t.</td>
      </tr>
      <tr>
        <td>392</td>
        <td>Vault</td>
        <td>1</td>
        <td>3.2</td>
        <td>113</td>
        <td>Hdspr. fwd. and salto fwd. p. w. ½ t. (Cuervo p.).</td>
      </tr>
      <tr>
        <td>393</td>
        <td>Vault</td>
        <td>1</td>
        <td>1.8</td>
        <td>102</td>
        <td>Forward handspring with ½ t.</td>
      </tr>
      <tr>
        <td>394</td>
        <td>Vault</td>
        <td>1</td>
        <td>2.8</td>
        <td>108</td>
        <td>Hdspr. fwd. and salto fwd. t. w. ½ t. (or Cuervo t.).</td>
      </tr>
      <tr>
        <td>395</td>
        <td>Vault</td>
        <td>1</td>
        <td>3.6</td>
        <td>114</td>
        <td>Hdspr. fwd. and salto fwd. p. w. 1/1 t. (Cuervo p. w. ½ t.).</td>
      </tr>
      <tr>
        <td>396</td>
        <td>Vault</td>
        <td>1</td>
        <td>2</td>
        <td>103</td>
        <td>Forward handspring with 1/1 t.</td>
      </tr>
      <tr>
        <td>397</td>
        <td>Vault</td>
        <td>1</td>
        <td>3.2</td>
        <td>109</td>
        <td>Hdspr. fwd. and salto fwd. t. w. 1/1 t. (Cuervo t. w. ½ t.).</td>
      </tr>
      <tr>
        <td>398</td>
        <td>Vault</td>
        <td>1</td>
        <td>4</td>
        <td>115</td>
        <td>Hdspr. fwd. and salto fwd. p. w. 3/2 t. (Cuervo p. w. 1/1 t.).</td>
      </tr>
      <tr>
        <td>399</td>
        <td>Vault</td>
        <td>1</td>
        <td>2.2</td>
        <td>104</td>
        <td>Forward handspring with 3/2 t.</td>
      </tr>
      <tr>
        <td>400</td>
        <td>Vault</td>
        <td>1</td>
        <td>4</td>
        <td>110</td>
        <td>(Kroll)Hdspr. fwd. and salto fwd. t. w. 3/2 t. (Cuervo t. w. 1/1 t.).</td>
      </tr>
      <tr>
        <td>401</td>
        <td>Vault</td>
        <td>1</td>
        <td>4</td>
        <td>116</td>
        <td>Hdspr. fwd. w. 1/1 t. a. salto fwd. t.(Behrend)</td>
      </tr>
      <tr>
        <td>402</td>
        <td>Vault</td>
        <td>1</td>
        <td>2.4</td>
        <td>105</td>
        <td>Forward handspring with 2/1 t.</td>
      </tr>
      <tr>
        <td>403</td>
        <td>Vault</td>
        <td>1</td>
        <td>4.4</td>
        <td>111</td>
        <td>(Canbas)Hdspr. fwd. and salto fwd. t. w. 2/1 t. (or Cuervo t. w. 3/2 t.).</td>
      </tr>
      <tr>
        <td>404</td>
        <td>Vault</td>
        <td>1</td>
        <td>4.4</td>
        <td>117</td>
        <td>Hdspr. fwd. w. 1/1 t. and salto fwd. p.(Rehm)</td>
      </tr>
      <tr>
        <td>405</td>
        <td>Vault</td>
        <td>1</td>
        <td>2.6</td>
        <td>106</td>
        <td>Forward handspring with 5/2 t.(Tsygankov)</td>
      </tr>
      <tr>
        <td>406</td>
        <td>Vault</td>
        <td>1</td>
        <td>2.8</td>
        <td>112</td>
        <td>Handspring fwd. and salto fwd. piked.</td>
      </tr>
      <tr>
        <td>407</td>
        <td>Vault</td>
        <td>1</td>
        <td>4.8</td>
        <td>118</td>
        <td>Hdspr. fwd. 1/1 t. and Salto fwd piked ½ t.½ g.(Arican)</td>
      </tr>
      <tr>
        <td>408</td>
        <td>Vault</td>
        <td>1</td>
        <td>3.6</td>
        <td>171</td>
        <td>Handspring fwd. and salto fwd. str.</td>
      </tr>
      <tr>
        <td>409</td>
        <td>Vault</td>
        <td>1</td>
        <td>6</td>
        <td>177</td>
        <td>Handspring fwd. and salto fwd. str. w. 3/1 t.</td>
      </tr>
      <tr>
        <td>410</td>
        <td>Vault</td>
        <td>1</td>
        <td>4</td>
        <td>172</td>
        <td>Hdspr. fwd. and salto fwd. str. w. ½ t. (Cuervo str.).</td>
      </tr>
      <tr>
        <td>411</td>
        <td>Vault</td>
        <td>1</td>
        <td>5.2</td>
        <td>178</td>
        <td>(Roche)Handspring fwd. and dbl. salto fwd. t.</td>
      </tr>
      <tr>
        <td>412</td>
        <td>Vault</td>
        <td>1</td>
        <td>5.6</td>
        <td>190</td>
        <td>Handspring fwd. and salto fwd. t. w. ½ t. and salto bwd. t.(Zimmerman)</td>
      </tr>
      <tr>
        <td>413</td>
        <td>Vault</td>
        <td>1</td>
        <td>4.4</td>
        <td>173</td>
        <td>Hdspr. fwd. and salto fwd. str. w. 1/1 t. (Cuervo str. ½ t.).</td>
      </tr>
      <tr>
        <td>414</td>
        <td>Vault</td>
        <td>1</td>
        <td>5.6</td>
        <td>179</td>
        <td>(Dragulescu)Roche with ½ turn.</td>
      </tr>
      <tr>
        <td>415</td>
        <td>Vault</td>
        <td>1</td>
        <td>5.6</td>
        <td>191</td>
        <td>(Blanik)Handspring fwd. and dbl. salto fwd. piked.</td>
      </tr>
      <tr>
        <td>416</td>
        <td>Vault</td>
        <td>1</td>
        <td>4.8</td>
        <td>174</td>
        <td>Hdspr. fwd. and salto fwd. str. w. 3/2 t. (Cuervo str. w. 1/1 t.).</td>
      </tr>
      <tr>
        <td>417</td>
        <td>Vault</td>
        <td>1</td>
        <td>6</td>
        <td>192</td>
        <td>(RI Se Gwang 2)Dragulescu piked.</td>
      </tr>
      <tr>
        <td>418</td>
        <td>Vault</td>
        <td>1</td>
        <td>5.2</td>
        <td>175</td>
        <td>Hdspr. fwd. and salto fwd. str. w. 2/1 t. (Cuervo str. 3/2 t.).</td>
      </tr>
      <tr>
        <td>419</td>
        <td>Vault</td>
        <td>1</td>
        <td>5.6</td>
        <td>176</td>
        <td>(Yeo 2) Handspring fwd. and salto fwd. str. w. 5/2 t.</td>
      </tr>
      <tr>
        <td>420</td>
        <td>Vault</td>
        <td>2</td>
        <td>1.6</td>
        <td>220</td>
        <td>Handspring sw. with ¼ t.</td>
      </tr>
      <tr>
        <td>421</td>
        <td>Vault</td>
        <td>2</td>
        <td>2.4</td>
        <td>226</td>
        <td>Tsukahara piked.</td>
      </tr>
      <tr>
        <td>422</td>
        <td>Vault</td>
        <td>2</td>
        <td>1.8</td>
        <td>221</td>
        <td>Handspring sw. with 3/4 t.</td>
      </tr>
      <tr>
        <td>423</td>
        <td>Vault</td>
        <td>2</td>
        <td>2.4</td>
        <td>227</td>
        <td>Tsukahara t. with ½ t.</td>
      </tr>
      <tr>
        <td>424</td>
        <td>Vault</td>
        <td>2</td>
        <td>2</td>
        <td>222</td>
        <td>Handspring sw. with 5/4 t.</td>
      </tr>
      <tr>
        <td>425</td>
        <td>Vault</td>
        <td>2</td>
        <td>2.8</td>
        <td>228</td>
        <td>Hdspr. sw. w. ¼ t. a. salto fwd. t. w. ½ t. or Tsuk. t. w. 1/1 t.(Kasamatsu)</td>
      </tr>
      <tr>
        <td>426</td>
        <td>Vault</td>
        <td>2</td>
        <td>2.4</td>
        <td>223</td>
        <td>Hdspr. sw. with. ¼ t. a. salto fwd. t.</td>
      </tr>
      <tr>
        <td>427</td>
        <td>Vault</td>
        <td>2</td>
        <td>3.2</td>
        <td>229</td>
        <td>Tsukahara t. w. 3/2 t.or Kasamatsu t. ½ t</td>
      </tr>
      <tr>
        <td>428</td>
        <td>Vault</td>
        <td>2</td>
        <td>2.8</td>
        <td>224</td>
        <td>Handspring sw. w. ¼ t. a. salto fwd. p.</td>
      </tr>
      <tr>
        <td>429</td>
        <td>Vault</td>
        <td>2</td>
        <td>4</td>
        <td>230</td>
        <td>Tsukahara t. with 2/1 t.(Barbieri)</td>
      </tr>
      <tr>
        <td>430</td>
        <td>Vault</td>
        <td>2</td>
        <td>2.2</td>
        <td>225</td>
        <td>Handspring sw. w. ¼ t. a. salto bwd. t.(Tsukahara)</td>
      </tr>
      <tr>
        <td>431</td>
        <td>Vault</td>
        <td>2</td>
        <td>3.2</td>
        <td>270</td>
        <td>Tsukahara stretched.</td>
      </tr>
      <tr>
        <td>432</td>
        <td>Vault</td>
        <td>2</td>
        <td>5.6</td>
        <td>276</td>
        <td>Kasamatsu str. with 2/1 t.</td>
      </tr>
      <tr>
        <td>433</td>
        <td>Vault</td>
        <td>2</td>
        <td>3.6</td>
        <td>271</td>
        <td>Tsukahara str. with ½ t. or Hdspr. sw ¼ t. salto fwd str.</td>
      </tr>
      <tr>
        <td>434</td>
        <td>Vault</td>
        <td>2</td>
        <td>6</td>
        <td>277</td>
        <td>Kasamatsu str. with 5/2 t. or Tsukahara st. with 7/2 t.(López)</td>
      </tr>
      <tr>
        <td>435</td>
        <td>Vault</td>
        <td>2</td>
        <td>4</td>
        <td>272</td>
        <td>Tsukahara str. w. 1/1 t.</td>
      </tr>
      <tr>
        <td>436</td>
        <td>Vault</td>
        <td>2</td>
        <td>4.4</td>
        <td>273</td>
        <td>Kasamatsu str. with ½ t. or Tsukahara str. w. 3/2 t.</td>
      </tr>
      <tr>
        <td>437</td>
        <td>Vault</td>
        <td>2</td>
        <td>5.2</td>
        <td>285</td>
        <td>Tsukahara with salto bwd. t.(Yeo)</td>
      </tr>
      <tr>
        <td>438</td>
        <td>Vault</td>
        <td>2</td>
        <td>4.8</td>
        <td>274</td>
        <td>Kasamatsu str. w. 1/1 t. or Tsukahara str. w. 2/1 t.(Akopian)</td>
      </tr>
      <tr>
        <td>439</td>
        <td>Vault</td>
        <td>2</td>
        <td>5.6</td>
        <td>286</td>
        <td>Tsukahara with salto bwd. piked.(Lu Yu Fu)</td>
      </tr>
      <tr>
        <td>440</td>
        <td>Vault</td>
        <td>2</td>
        <td>5.2</td>
        <td>275</td>
        <td>Kasamatsu str. with 3/2 t. (Driggs)</td>
      </tr>
      <tr>
        <td>441</td>
        <td>Vault</td>
        <td>2</td>
        <td>6</td>
        <td>287</td>
        <td>Double Tsukahara with 1/1 twist.(Ri Se Gwang)</td>
      </tr>
      <tr>
        <td>442</td>
        <td>Vault</td>
        <td>3</td>
        <td>1.6</td>
        <td>335</td>
        <td>Round off, handspring bwd.</td>
      </tr>
      <tr>
        <td>443</td>
        <td>Vault</td>
        <td>3</td>
        <td>3.2</td>
        <td>341</td>
        <td>Yurchenko t. with 3/2 t.</td>
      </tr>
      <tr>
        <td>444</td>
        <td>Vault</td>
        <td>3</td>
        <td>1.8</td>
        <td>336</td>
        <td>Round off, handspring bwd. with ½ turn.</td>
      </tr>
      <tr>
        <td>445</td>
        <td>Vault</td>
        <td>3</td>
        <td>4</td>
        <td>342</td>
        <td>Yurchenko t. with 2/1 t.</td>
      </tr>
      <tr>
        <td>446</td>
        <td>Vault</td>
        <td>3</td>
        <td>2</td>
        <td>337</td>
        <td>Round off, handspring bwd. with 1/1 turn.</td>
      </tr>
      <tr>
        <td>447</td>
        <td>Vault</td>
        <td>3</td>
        <td>2.4</td>
        <td>343</td>
        <td>Yurchenko piked.</td>
      </tr>
      <tr>
        <td>448</td>
        <td>Vault</td>
        <td>3</td>
        <td>2.2</td>
        <td>338</td>
        <td>Round off, hdspr. bwd. and salto bwd. t.(Yurchenko)</td>
      </tr>
      <tr>
        <td>449</td>
        <td>Vault</td>
        <td>3</td>
        <td>2.4</td>
        <td>339</td>
        <td>Yurchenko t. with ½ t.</td>
      </tr>
      <tr>
        <td>450</td>
        <td>Vault</td>
        <td>3</td>
        <td>2.8</td>
        <td>340</td>
        <td>Yurchenko t. with 1/1 t.</td>
      </tr>
      <tr>
        <td>451</td>
        <td>Vault</td>
        <td>3</td>
        <td>3.2</td>
        <td>370</td>
        <td>Yurchenko stretched.</td>
      </tr>
      <tr>
        <td>452</td>
        <td>Vault</td>
        <td>3</td>
        <td>5.6</td>
        <td>376</td>
        <td>Yurchenko Stretched 3/1 t. (Shirai - KIM Hee Hoon)</td>
      </tr>
      <tr>
        <td>453</td>
        <td>Vault</td>
        <td>3</td>
        <td>3.6</td>
        <td>371</td>
        <td>Yurchenko stretched with ½ t.</td>
      </tr>
      <tr>
        <td>454</td>
        <td>Vault</td>
        <td>3</td>
        <td>4</td>
        <td>372</td>
        <td>Yurchenko stretched with 1/1 t.</td>
      </tr>
      <tr>
        <td>455</td>
        <td>Vault</td>
        <td>3</td>
        <td>4.4</td>
        <td>373</td>
        <td>Yurchenko stretched with 3/2 t.</td>
      </tr>
      <tr>
        <td>456</td>
        <td>Vault</td>
        <td>3</td>
        <td>5.2</td>
        <td>385</td>
        <td>Yurchenko and salto bwd. t.(Melissanidis)</td>
      </tr>
      <tr>
        <td>457</td>
        <td>Vault</td>
        <td>3</td>
        <td>4.8</td>
        <td>374</td>
        <td>Yurchenko stretched with 2/1 t.</td>
      </tr>
      <tr>
        <td>458</td>
        <td>Vault</td>
        <td>3</td>
        <td>5.6</td>
        <td>386</td>
        <td>Melissanidis piked.</td>
      </tr>
      <tr>
        <td>459</td>
        <td>Vault</td>
        <td>3</td>
        <td>5.2</td>
        <td>375</td>
        <td>Yurchenko stretched with 5/2 t.(Shewfelt)</td>
      </tr>
      <tr>
        <td>460</td>
        <td>Vault</td>
        <td>4</td>
        <td>3.4</td>
        <td>456</td>
        <td>Round off, ½ t. and hdspr. fwd. and salto fwd. p. with ½ t.</td>
      </tr>
      <tr>
        <td>461</td>
        <td>Vault</td>
        <td>4</td>
        <td>2</td>
        <td>451</td>
        <td>Round off, ½ t. and hdspr. fwd. with ½ t.</td>
      </tr>
      <tr>
        <td>462</td>
        <td>Vault</td>
        <td>4</td>
        <td>3.4</td>
        <td>456</td>
        <td>Round off, ½ t. and hdspr. fwd. and salto fwd. p. with ½ t. (Nemov)</td>
      </tr>
      <tr>
        <td>463</td>
        <td>Vault</td>
        <td>4</td>
        <td>2.2</td>
        <td>452</td>
        <td>Round off, ½ t. and hdspr. fwd. with 1/1 t.</td>
      </tr>
      <tr>
        <td>464</td>
        <td>Vault</td>
        <td>4</td>
        <td>2.6</td>
        <td>453</td>
        <td>Round off, ½ t. and hdspr. fwd. and salto fwd. tucked.</td>
      </tr>
      <tr>
        <td>465</td>
        <td>Vault</td>
        <td>4</td>
        <td>3.8</td>
        <td>471</td>
        <td>Round off, ½ t. and hdspr. fwd. and salto fwd. str.</td>
      </tr>
      <tr>
        <td>466</td>
        <td>Vault</td>
        <td>4</td>
        <td>3</td>
        <td>454</td>
        <td>Round off, ½ t. and hdspr. fwd. and salto fwd. tucked with ½ t.</td>
      </tr>
      <tr>
        <td>467</td>
        <td>Vault</td>
        <td>4</td>
        <td>4.2</td>
        <td>472</td>
        <td>Round off, ½ t. and hdspr. fwd. and salto fwd. str. with ½ t.</td>
      </tr>
      <tr>
        <td>468</td>
        <td>Vault</td>
        <td>4</td>
        <td>3</td>
        <td>455</td>
        <td>Round off, ½ t. a. hdspr. fwd. and salto fwd. p.</td>
      </tr>
      <tr>
        <td>469</td>
        <td>Vault</td>
        <td>4</td>
        <td>4.6</td>
        <td>473</td>
        <td>Round off, ½ t. and hdspr. fwd. and salto fwd. str. with 1/1 t.</td>
      </tr>
      <tr>
        <td>470</td>
        <td>Vault</td>
        <td>4</td>
        <td>5</td>
        <td>474</td>
        <td>Round off, ½ t. and hdspr. fwd. and salto fwd. stretched with 3/2 t.</td>
      </tr>
      <tr>
        <td>471</td>
        <td>Vault</td>
        <td>4</td>
        <td>5.4</td>
        <td>475</td>
        <td>Round off, ½ t. and hdspr. fwd. and salto fwd. stretched with 2/1 t.</td>
      </tr>
      <tr>
        <td>472</td>
        <td>Vault</td>
        <td>4</td>
        <td>5.8</td>
        <td>476</td>
        <td>Round off, ½ t. and hdspr. fwd. and salto fwd. str. with 5/2 t.(Li Xiao Peng)</td>
      </tr>
      <tr>
        <td>473</td>
        <td>Vault</td>
        <td>4</td>
        <td>5.4</td>
        <td>478</td>
        <td>Round off, ½ t. a. hdspr. fwd. and double salto fwd. tucked.</td>
      </tr>
      <tr>
        <td>474</td>
        <td>Vault</td>
        <td>5</td>
        <td>2.2</td>
        <td>560</td>
        <td>Scherbo entry to back handspring.</td>
      </tr>
      <tr>
        <td>475</td>
        <td>Vault</td>
        <td>5</td>
        <td>3.4</td>
        <td>566</td>
        <td>Scherbo entry to salto bwd. tucked with 1/1 turn.</td>
      </tr>
      <tr>
        <td>476</td>
        <td>Vault</td>
        <td>5</td>
        <td>4.6</td>
        <td>572</td>
        <td>Scherbo with 1/1 t.</td>
      </tr>
      <tr>
        <td>477</td>
        <td>Vault</td>
        <td>5</td>
        <td>2.4</td>
        <td>561</td>
        <td>Scherbo entry to back handspring with ½ turn.</td>
      </tr>
      <tr>
        <td>478</td>
        <td>Vault</td>
        <td>5</td>
        <td>3.8</td>
        <td>567</td>
        <td>Scherbo entry to salto bwd. tucked with 3/2 turn.</td>
      </tr>
      <tr>
        <td>479</td>
        <td>Vault</td>
        <td>5</td>
        <td>5</td>
        <td>573</td>
        <td>Scherbo with 3/2 t.</td>
      </tr>
      <tr>
        <td>480</td>
        <td>Vault</td>
        <td>5</td>
        <td>2.6</td>
        <td>562</td>
        <td>Scherbo entry to back handspring with 1/1 turn.</td>
      </tr>
      <tr>
        <td>481</td>
        <td>Vault</td>
        <td>5</td>
        <td>5.4</td>
        <td>574</td>
        <td>Scherbo with 2/1 t.</td>
      </tr>
      <tr>
        <td>482</td>
        <td>Vault</td>
        <td>5</td>
        <td>2.8</td>
        <td>563</td>
        <td>Scherbo entry to salto bwd. tucked.</td>
      </tr>
      <tr>
        <td>483</td>
        <td>Vault</td>
        <td>5</td>
        <td>5.8</td>
        <td>575</td>
        <td>Scherbo with 5/2 t.</td>
      </tr>
      <tr>
        <td>484</td>
        <td>Vault</td>
        <td>5</td>
        <td>3</td>
        <td>564</td>
        <td>Scherbo entry to salto bwd. piked.</td>
      </tr>
      <tr>
        <td>485</td>
        <td>Vault</td>
        <td>5</td>
        <td>3.8</td>
        <td>570</td>
        <td>Scherbo entry to salto bwd. stretched.(Scherbo)</td>
      </tr>
      <tr>
        <td>486</td>
        <td>Vault</td>
        <td>5</td>
        <td>3</td>
        <td>565</td>
        <td>Scherbo entry to salto bwd. tucked with ½ turn.</td>
      </tr>
      <tr>
        <td>487</td>
        <td>Vault</td>
        <td>5</td>
        <td>4.2</td>
        <td>571</td>
        <td>Scherbo with ½ t.</td>
      </tr>
      <tr>
        <td>488</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>A</td>
        <td>1</td>
        <td>Any handstand on 1 or 2 rails (2 s.).</td>
      </tr>
      <tr>
        <td>489</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>A</td>
        <td>7</td>
        <td>Any L-sit on 1 or 2 rails (2 s.).</td>
      </tr>
      <tr>
        <td>490</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>A</td>
        <td>13</td>
        <td>Straddle cut fwd. to support or L-sit (2 s.).</td>
      </tr>
      <tr>
        <td>491</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>A</td>
        <td>19</td>
        <td>Straddle cut bwd. to support.</td>
      </tr>
      <tr>
        <td>492</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>B</td>
        <td>2</td>
        <td>Bent arm swing fwd. to hop ½ t. to sup.(Kato)</td>
      </tr>
      <tr>
        <td>493</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>B</td>
        <td>8</td>
        <td>Swing fwd. w. 1/1 t. to up. arm hang.(Carminucci)</td>
      </tr>
      <tr>
        <td>494</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>B</td>
        <td>14</td>
        <td>Straddle cut bwd. to hdst.</td>
      </tr>
      <tr>
        <td>495</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>B</td>
        <td>20</td>
        <td>Strad. cut bwd. and salto fwd. to up. arm hang.</td>
      </tr>
      <tr>
        <td>496</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>C</td>
        <td>3</td>
        <td>Stützkehr fwd. to hdst.(to 1 or 2 bars).</td>
      </tr>
      <tr>
        <td>497</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>C</td>
        <td>15</td>
        <td>Diamidov and ½ turn to upper arms.(Salazar)</td>
      </tr>
      <tr>
        <td>498</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>C</td>
        <td>21</td>
        <td>Swing fwd. w. 1/1 t. on 1 arm to hdst.(Diamidov)</td>
      </tr>
      <tr>
        <td>499</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>D</td>
        <td>10</td>
        <td>Stützkehr fwd. or salto bwd. to hdst. sideways on 1 rail (also with additional ¼ or ¾ turn to hdst.).(Bilozerchev - Peters)</td>
      </tr>
      <tr>
        <td>500</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>D</td>
        <td>16</td>
        <td>¾ Diamidov and rear vault to side hang on 1 bar.(De Freitas)</td>
      </tr>
      <tr>
        <td>501</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>D</td>
        <td>22</td>
        <td>Diamidov with ½</td>
      </tr>
      <tr>
        <td>502</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>B</td>
        <td>26</td>
        <td>Any press w. bent arm str. body, or str. arm bent body to hdst., on 1 or 2 rails (2 s.) also straddled.</td>
      </tr>
      <tr>
        <td>503</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>B</td>
        <td>32</td>
        <td>Swing fwd. to hdst., hop to support.(Carballo)</td>
      </tr>
      <tr>
        <td>504</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>C</td>
        <td>27</td>
        <td>Makuts to upper arm hang or ¾ Diamidov ¼ Healy to support.</td>
      </tr>
      <tr>
        <td>505</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>C</td>
        <td>33</td>
        <td>Salto bwd to handstand. Also to one rail.</td>
      </tr>
      <tr>
        <td>506</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>C</td>
        <td>45</td>
        <td>Salto bwd. with ½ t. to up. arm hang.(Toumilovich)</td>
      </tr>
      <tr>
        <td>507</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>D</td>
        <td>28</td>
        <td>Swing forward with 5/4 t. on one arm through-hdst. and healy to up. arm.</td>
      </tr>
      <tr>
        <td>508</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>D</td>
        <td>34</td>
        <td>Salto backward with straddle cut to support.</td>
      </tr>
      <tr>
        <td>509</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>D</td>
        <td>40</td>
        <td>Salto bwd to handstand 1 rail (connected to Healy type element).(Rumbutis)</td>
      </tr>
      <tr>
        <td>510</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>D</td>
        <td>46</td>
        <td>Double salto t. to up. arm hang.(Morisue)</td>
      </tr>
      <tr>
        <td>511</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>E</td>
        <td>29</td>
        <td>¾ Diamidov & ¾ Healy on the other hand to supp.(Makuts)</td>
      </tr>
      <tr>
        <td>512</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>E</td>
        <td>47</td>
        <td>Double salto p. to up. arm hang.(Huang Liping)</td>
      </tr>
      <tr>
        <td>513</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>F</td>
        <td>30</td>
        <td>Swing forward with 5/4 t. on one arm through hdst. and healy to support.(Zonderland)</td>
      </tr>
      <tr>
        <td>514</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>B</td>
        <td>50</td>
        <td>Hdst. with ¼ t. and fall back to sup. with ¼ t.</td>
      </tr>
      <tr>
        <td>515</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>B</td>
        <td>62</td>
        <td>Stützkehr bwd. to support.</td>
      </tr>
      <tr>
        <td>516</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>B</td>
        <td>68</td>
        <td>Healy to upper arm hang.</td>
      </tr>
      <tr>
        <td>517</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>C</td>
        <td>51</td>
        <td>(Brändström)Hdst. with ¾ t. and fall back to sup. with ¼ t.</td>
      </tr>
      <tr>
        <td>518</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>C</td>
        <td>57</td>
        <td>Stützkehr bwd. with straddle cut bwd. to sup.</td>
      </tr>
      <tr>
        <td>519</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>C</td>
        <td>63</td>
        <td>Stützkehr bwd. through hdst. to support.(Novikov)</td>
      </tr>
      <tr>
        <td>520</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>C</td>
        <td>69</td>
        <td>From hdst. on 1 rail, Healy to upper arm hang.</td>
      </tr>
      <tr>
        <td>521</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>D</td>
        <td>52</td>
        <td>(Suarez)3/2 salto bwd. with ½ t. to up. arm hang.</td>
      </tr>
      <tr>
        <td>522</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>D</td>
        <td>70</td>
        <td>Healy to support (also from hdst. on 1 rail).(Healy)</td>
      </tr>
      <tr>
        <td>523</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>E</td>
        <td>71</td>
        <td>Following a swing element (min. B) to hdst on 1 rail, Healy (360° or more) to support.</td>
      </tr>
      <tr>
        <td>524</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>A</td>
        <td>79</td>
        <td>Any hdst. with ½ turn fwd. (also with 2 s.).</td>
      </tr>
      <tr>
        <td>525</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>A</td>
        <td>85</td>
        <td>½ turn bwd. in handstand (also with 2 s.).</td>
      </tr>
      <tr>
        <td>526</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>B</td>
        <td>74</td>
        <td>Swing bwd. with ½ t. hop to hdst.</td>
      </tr>
      <tr>
        <td>527</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>B</td>
        <td>80</td>
        <td>Any 1/1 pirouette in hdst. on 2 rails.</td>
      </tr>
      <tr>
        <td>528</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>B</td>
        <td>86</td>
        <td>From hdst. on 1 rail, ½ or ¾ pir. fwd. or bwd. in hdst.</td>
      </tr>
      <tr>
        <td>529</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>C</td>
        <td>75</td>
        <td>Swing bwd. with ¾ t. hop to hdst.</td>
      </tr>
      <tr>
        <td>530</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>C</td>
        <td>93</td>
        <td>From hdst., salto fwd to support or from hdsd. with rotated grip, inlocate to support.</td>
      </tr>
      <tr>
        <td>531</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>D</td>
        <td>76</td>
        <td>Swing bwd. with 1/1 t. hop to hdst. (Gatson 1)</td>
      </tr>
      <tr>
        <td>532</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>E</td>
        <td>77</td>
        <td>Gatson 1 with ¼ t to hdst. on 1 rail and ¼ t. hdst. on 2 rails.(Gatson 2)</td>
      </tr>
      <tr>
        <td>533</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>E</td>
        <td>95</td>
        <td>5/4 salto fwd. strad. through support to hang or directly to hang.(Lee Chul Hon/Sasaki)</td>
      </tr>
      <tr>
        <td>534</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>A</td>
        <td>115</td>
        <td>On end, 1 circle or flair.</td>
      </tr>
      <tr>
        <td>535</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>B</td>
        <td>98</td>
        <td>5/4 salto fwd. t. or p. to upper arm hang.</td>
      </tr>
      <tr>
        <td>536</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>B</td>
        <td>104</td>
        <td>Salto fwd. t. or p. with ¼ t. to hang on 1 rail.</td>
      </tr>
      <tr>
        <td>537</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>B</td>
        <td>116</td>
        <td>In center or on end facing out, 1 circle or flair.</td>
      </tr>
      <tr>
        <td>538</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>C</td>
        <td>99</td>
        <td>Salto fwd to support.</td>
      </tr>
      <tr>
        <td>539</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>C</td>
        <td>105</td>
        <td>Salto fwd. t. or p. to hang at the end of the bars.</td>
      </tr>
      <tr>
        <td>540</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>C</td>
        <td>111</td>
        <td>5/4 salto forward str. to upper arm hang</td>
      </tr>
      <tr>
        <td>541</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>C</td>
        <td>117</td>
        <td>On end, Russian wende swing (360°).(Delesalle)</td>
      </tr>
      <tr>
        <td>542</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>D</td>
        <td>100</td>
        <td>5/4 salto fwd. straddled to up. arm hang.</td>
      </tr>
      <tr>
        <td>543</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>D</td>
        <td>106</td>
        <td>Double salto fwd. t. to up. arm hang.</td>
      </tr>
      <tr>
        <td>544</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>E</td>
        <td>101</td>
        <td>5/4 salto fwd. strad. to bent arm sup.</td>
      </tr>
      <tr>
        <td>545</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>E</td>
        <td>107</td>
        <td>Double salto fwd. p. to up. arm hang.</td>
      </tr>
      <tr>
        <td>546</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>E</td>
        <td>113</td>
        <td>(Urzica)Salto fwd. with 1/1 t. to up. arm hang.</td>
      </tr>
      <tr>
        <td>547</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>C</td>
        <td>123</td>
        <td>Any flair to hdst.</td>
      </tr>
      <tr>
        <td>548</td>
        <td>Parallel Bars</td>
        <td>1</td>
        <td>C</td>
        <td>129</td>
        <td>Any flair with ½ t. to hdst.</td>
      </tr>
      <tr>
        <td>549</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>A</td>
        <td>1</td>
        <td>Forward uprise to support.</td>
      </tr>
      <tr>
        <td>550</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>A</td>
        <td>7</td>
        <td>Fwd. uprise with ¼ t. to hang on 1 rail.</td>
      </tr>
      <tr>
        <td>551</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>B</td>
        <td>2</td>
        <td>Fwd. uprise and straddle cut bwd to handstand.</td>
      </tr>
      <tr>
        <td>552</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>B</td>
        <td>8</td>
        <td>Roll bwd. with ½ t. from up. arm. hang uprise to Kato hop to sup.(Watanabe)</td>
      </tr>
      <tr>
        <td>553</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>B</td>
        <td>14</td>
        <td>Roll bwd to handstand with straight arms.</td>
      </tr>
      <tr>
        <td>554</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>B</td>
        <td>20</td>
        <td>Salto bwd. with strad. cut to up. arm hang</td>
      </tr>
      <tr>
        <td>555</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>C</td>
        <td>21</td>
        <td>Roll bwd. with strad. cut to support.</td>
      </tr>
      <tr>
        <td>556</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>E</td>
        <td>5</td>
        <td>Fwd. uprise with ½ t. to handstand.</td>
      </tr>
      <tr>
        <td>557</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>E</td>
        <td>11</td>
        <td>Fwd. uprise to Makuts to upper arm.</td>
      </tr>
      <tr>
        <td>558</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>E</td>
        <td>17</td>
        <td>Fwd. uprise with 1/1 t. to handstand.(Richards)</td>
      </tr>
      <tr>
        <td>559</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>E</td>
        <td>23</td>
        <td>Roll bwd with salto bwd tuck to upper arm hang.(Dimitrenko)</td>
      </tr>
      <tr>
        <td>560</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>G</td>
        <td>12</td>
        <td>Fwd. uprise to Makuts to support.(Tsolakidis 1)</td>
      </tr>
      <tr>
        <td>561</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>F</td>
        <td>18</td>
        <td>Fwd. uprise with 3/2 t. to handstand.(Tsolakidis 2)</td>
      </tr>
      <tr>
        <td>562</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>F</td>
        <td>24</td>
        <td>Roll bwd with salto bwd piked to upper arm hang.(Li Xiaopeng)</td>
      </tr>
      <tr>
        <td>563</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>B</td>
        <td>32</td>
        <td>Bwd. uprise to handstand (or w. ½ t).</td>
      </tr>
      <tr>
        <td>564</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>B</td>
        <td>38</td>
        <td>Bwd. uprise with ½ t. and straddle cut bwd to upper arm hang.</td>
      </tr>
      <tr>
        <td>565</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>B</td>
        <td>44</td>
        <td>Bwd. uprise with ½ t. to support.</td>
      </tr>
      <tr>
        <td>566</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>C</td>
        <td>33</td>
        <td>Bwd. uprise with ½ t. hop to handstand.</td>
      </tr>
      <tr>
        <td>567</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>C</td>
        <td>39</td>
        <td>Bwd. uprise with ½ t. a. strad. cut bwd. to sup.</td>
      </tr>
      <tr>
        <td>568</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>C</td>
        <td>45</td>
        <td>Bwd. uprise and 5/4 salto fwd. t., p. or strad. to up.arm hang.(Yamawaki)</td>
      </tr>
      <tr>
        <td>569</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>D</td>
        <td>28</td>
        <td>Roll bwd. with ½ t. tuck to upper arm hang.. agrupado al apoyo bra-quial.(Harada)</td>
      </tr>
      <tr>
        <td>570</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>D</td>
        <td>34</td>
        <td>Bwd. uprise with ¾ t. hop to hdst. on 1 rail.</td>
      </tr>
      <tr>
        <td>571</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>D</td>
        <td>46</td>
        <td>Bwd. uprise and salto fwd. p. to sup.</td>
      </tr>
      <tr>
        <td>572</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>E</td>
        <td>29</td>
        <td>Roll bwd. with ½ t. tuck to hang.. agrupado a la suspensión.(Dalton)</td>
      </tr>
      <tr>
        <td>573</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>E</td>
        <td>47</td>
        <td>Bwd. uprise and double salto fwd. t. to up arm hang.</td>
      </tr>
      <tr>
        <td>574</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>A</td>
        <td>55</td>
        <td>Bwd. uprise and strad. cut or flank over to sup.</td>
      </tr>
      <tr>
        <td>575</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>B</td>
        <td>56</td>
        <td>Bwd. uprise and strad. cut or flank over to sup.</td>
      </tr>
      <tr>
        <td>576</td>
        <td>Parallel Bars</td>
        <td>2</td>
        <td>E</td>
        <td>53</td>
        <td>Bwd. uprise and 5/4 salto fwd. straddled to up. Arm hang.</td>
      </tr>
      <tr>
        <td>577</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>B</td>
        <td>8</td>
        <td>Moy piked with stradd. cut bwd. and ½ t. to up. arm hang (also legs together).</td>
      </tr>
      <tr>
        <td>578</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>B</td>
        <td>14</td>
        <td>Moy to support bent legs (also without grip release).</td>
      </tr>
      <tr>
        <td>579</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>C</td>
        <td>3</td>
        <td>Swing forward, straddle cut backward, and regrasp with straight body at horizontal to bent and upper arm.</td>
      </tr>
      <tr>
        <td>580</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>C</td>
        <td>9</td>
        <td>Moy piked with 1/1 t. to up. arm hang.(Nolet)</td>
      </tr>
      <tr>
        <td>581</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>C</td>
        <td>15</td>
        <td>(Moy)Moy to support str. legs (also without grip release).</td>
      </tr>
      <tr>
        <td>582</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>C</td>
        <td>21</td>
        <td>Giant swing bwd. to hdst. or with inlocation fwd. (also with ¼ or ½ turn and to one rail).</td>
      </tr>
      <tr>
        <td>583</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>D</td>
        <td>4</td>
        <td>Moy piked with straddle bwd to hdst.(Tippelt)</td>
      </tr>
      <tr>
        <td>584</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>D</td>
        <td>10</td>
        <td>Moy and salto fwd. T., p. Or strad. To upper arm hang. (Giraldo)</td>
      </tr>
      <tr>
        <td>585</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>D</td>
        <td>22</td>
        <td>Giant swing bwd. to hdst. on one rail (connected to Healy type element).(Piasecky)</td>
      </tr>
      <tr>
        <td>586</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>E</td>
        <td>5</td>
        <td>Swing forward, straddle cut backward, and regrasp with straight body at horizontal.(Bhavsar)</td>
      </tr>
      <tr>
        <td>587</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>B</td>
        <td>32</td>
        <td>Swing down with salto bwd. str. to hang.</td>
      </tr>
      <tr>
        <td>588</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>B</td>
        <td>44</td>
        <td>Giant swing bwd. w. strad. cut to up. arm hang.</td>
      </tr>
      <tr>
        <td>589</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>C</td>
        <td>33</td>
        <td>Giant swing bwd. with ½ t. to up. arm hang.½ (Gushiken)</td>
      </tr>
      <tr>
        <td>590</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>D</td>
        <td>28</td>
        <td>Giant swg. bwd. with Diamidov to hdst., also to one rail.</td>
      </tr>
      <tr>
        <td>591</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>D</td>
        <td>34</td>
        <td>Giant swing bwd. with ½ t. to support.½ (Marinitch)</td>
      </tr>
      <tr>
        <td>592</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>D</td>
        <td>40</td>
        <td>Giant swing bwd. with Makuts to upper hang.(Dauser)</td>
      </tr>
      <tr>
        <td>593</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>D</td>
        <td>46</td>
        <td>(Korolev)Giant swing bwd. with straddle cut to support or bent arms support.</td>
      </tr>
      <tr>
        <td>594</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>E</td>
        <td>29</td>
        <td>or ½ Giant swg. Diamidov with ¼ or ½ t. to hdst. or ½</td>
      </tr>
      <tr>
        <td>595</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>E</td>
        <td>35</td>
        <td>Giant swg. bwd. with Diamidov to hdst. one rail (connected to Healy type element).</td>
      </tr>
      <tr>
        <td>596</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>E</td>
        <td>47</td>
        <td>Giant swing bwd. with ½ t. and str. cut bwd. to up. arms.(Sosa)</td>
      </tr>
      <tr>
        <td>597</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>G</td>
        <td>36</td>
        <td>Belle with 1/1 turn.(Quintero)</td>
      </tr>
      <tr>
        <td>598</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>A</td>
        <td>61</td>
        <td>Glide kip</td>
      </tr>
      <tr>
        <td>599</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>B</td>
        <td>62</td>
        <td>Glide kip. with 1/2 t. to support.</td>
      </tr>
      <tr>
        <td>600</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>B</td>
        <td>68</td>
        <td>Glide kip to strad. cut bwd. hdst. on 1 or 2 r.</td>
      </tr>
      <tr>
        <td>601</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>C</td>
        <td>57</td>
        <td>(Chartrand)Giant swing bwd. and salto with ½ t to hang on the end.</td>
      </tr>
      <tr>
        <td>602</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>C</td>
        <td>63</td>
        <td>Glide kip bwd. to hdst.</td>
      </tr>
      <tr>
        <td>603</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>D</td>
        <td>52</td>
        <td>(Belle)</td>
      </tr>
      <tr>
        <td>604</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>D</td>
        <td>58</td>
        <td>Giant swing bwd. and salto with ½ t or p. to up. arm hang or hang.</td>
      </tr>
      <tr>
        <td>605</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>E</td>
        <td>53</td>
        <td>Belle piked.</td>
      </tr>
      <tr>
        <td>606</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>E</td>
        <td>59</td>
        <td>(Torres)Giant swing bwd. and salto with ½ t or p. to support.</td>
      </tr>
      <tr>
        <td>607</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>E</td>
        <td>65</td>
        <td>Giant swing bwd. and salto with ½ str to up. arm hang.(Fokin)</td>
      </tr>
      <tr>
        <td>608</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>F</td>
        <td>60</td>
        <td>(Tanaka)Giant swing bwd. with ½ t. and 3/2 salto fwd to up arm hang.</td>
      </tr>
      <tr>
        <td>609</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>B</td>
        <td>74</td>
        <td>Glide kip one rail through L-sit strad. to hdst.</td>
      </tr>
      <tr>
        <td>610</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>B</td>
        <td>80</td>
        <td>(Li Donghua)</td>
      </tr>
      <tr>
        <td>611</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>C</td>
        <td>75</td>
        <td>Glide kip through L-sit p. to hdst.</td>
      </tr>
      <tr>
        <td>612</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>D</td>
        <td>76</td>
        <td>Glide kip through L-sit p.to hdst. and hop with 3/4 t or more.</td>
      </tr>
      <tr>
        <td>613</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>A</td>
        <td>97</td>
        <td>Cast to upper arm hang.</td>
      </tr>
      <tr>
        <td>614</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>A</td>
        <td>115</td>
        <td>Basket with travel to hang</td>
      </tr>
      <tr>
        <td>615</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>B</td>
        <td>98</td>
        <td>Cast to support.</td>
      </tr>
      <tr>
        <td>616</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>B</td>
        <td>104</td>
        <td>Cast with ½ t. to up. arm hang.</td>
      </tr>
      <tr>
        <td>617</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>B</td>
        <td>116</td>
        <td>Basket to support</td>
      </tr>
      <tr>
        <td>618</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>C</td>
        <td>99</td>
        <td>Felge with ½ t. to upper arm hang.</td>
      </tr>
      <tr>
        <td>619</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>C</td>
        <td>105</td>
        <td>Cast with ½ t. to support.</td>
      </tr>
      <tr>
        <td>620</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>C</td>
        <td>111</td>
        <td>Cast to straddle cut backward to handstand.(Arican)</td>
      </tr>
      <tr>
        <td>621</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>C</td>
        <td>117</td>
        <td>Basket with immed. straddle cut to support.</td>
      </tr>
      <tr>
        <td>622</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>D</td>
        <td>100</td>
        <td>Felge with ½ t. to rear support.</td>
      </tr>
      <tr>
        <td>623</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>D</td>
        <td>106</td>
        <td>Basket to handstand or with inlocation (el-grip) and hop to hdst. Also to one rail.</td>
      </tr>
      <tr>
        <td>624</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>E</td>
        <td>107</td>
        <td>Basket with ¼, ¾ or ½ t. to handstand.</td>
      </tr>
      <tr>
        <td>625</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>E</td>
        <td>119</td>
        <td>Basket to one rail hdst. (connected to Healy type element).(Chiarlo)</td>
      </tr>
      <tr>
        <td>626</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>F</td>
        <td>114</td>
        <td>Basket with 1/1 t. to handstand.(Teng Hai Bin)</td>
      </tr>
      <tr>
        <td>627</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>G</td>
        <td>108</td>
        <td>Basket with 5/4 t. to handstand.(Zhou Shixiong)</td>
      </tr>
      <tr>
        <td>628</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>G</td>
        <td>120</td>
        <td>Basket through handstand to Makuts. (Yamamuro)</td>
      </tr>
      <tr>
        <td>629</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>A</td>
        <td>121</td>
        <td>Basket forward to support.</td>
      </tr>
      <tr>
        <td>630</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>B</td>
        <td>122</td>
        <td>Basket forward with ½ t. to support.</td>
      </tr>
      <tr>
        <td>631</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>B</td>
        <td>128</td>
        <td>Shoot up to hdst. and hop to other rail.</td>
      </tr>
      <tr>
        <td>632</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>D</td>
        <td>130</td>
        <td>Shoot up with ¼ t. to hdst.</td>
      </tr>
      <tr>
        <td>633</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>D</td>
        <td>136</td>
        <td>Straddled shoot to hdst on 1 rail.</td>
      </tr>
      <tr>
        <td>634</td>
        <td>Parallel Bars</td>
        <td>3</td>
        <td>E</td>
        <td>125</td>
        <td>(Tejada)Basket with salto bwd t. to up. arm hang.</td>
      </tr>
      <tr>
        <td>635</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>A</td>
        <td>1</td>
        <td>Salto fwd. piked or stretched.</td>
      </tr>
      <tr>
        <td>636</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>A</td>
        <td>19</td>
        <td>Salto bwd. piked or str.</td>
      </tr>
      <tr>
        <td>637</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>B</td>
        <td>2</td>
        <td>Salto fwd. piked or str. with ½ t.</td>
      </tr>
      <tr>
        <td>638</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>B</td>
        <td>20</td>
        <td>Salto bwd. piked or str. with ½ t.</td>
      </tr>
      <tr>
        <td>639</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>C</td>
        <td>3</td>
        <td>Salto fwd. piked or str. with 1/1 or 3/2 t.</td>
      </tr>
      <tr>
        <td>640</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>C</td>
        <td>9</td>
        <td>Double salto fwd. t. from end.</td>
      </tr>
      <tr>
        <td>641</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>C</td>
        <td>21</td>
        <td>Salto bwd. piked or str. with 1/1 or 3/2 t.</td>
      </tr>
      <tr>
        <td>642</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>D</td>
        <td>4</td>
        <td>Salto fwd. piked or str. with 2/1 or 5/2 t.</td>
      </tr>
      <tr>
        <td>643</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>D</td>
        <td>22</td>
        <td>Salto bwd. str. with 2/1 t.(Kan)</td>
      </tr>
      <tr>
        <td>644</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>E</td>
        <td>5</td>
        <td>Double salto fwd. t.</td>
      </tr>
      <tr>
        <td>645</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>F</td>
        <td>6</td>
        <td>Double salto fwd. piked.(Belyavskiy)</td>
      </tr>
      <tr>
        <td>646</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>F</td>
        <td>12</td>
        <td>Double salto fwd. t. w. ½ t. or ½ t. doub. salt. bwd.</td>
      </tr>
      <tr>
        <td>647</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>G</td>
        <td>18</td>
        <td>Double salto fwd. piked with ½ t.</td>
      </tr>
      <tr>
        <td>648</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>G</td>
        <td>24</td>
        <td>Double salto fwd. tucked with 1/1 t.(Larduet)</td>
      </tr>
      <tr>
        <td>649</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>A</td>
        <td>43</td>
        <td>From hang on end, salto bwd. stretched.</td>
      </tr>
      <tr>
        <td>650</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>B</td>
        <td>32</td>
        <td>Double salto bwd. t. from end.</td>
      </tr>
      <tr>
        <td>651</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>B</td>
        <td>44</td>
        <td>From hang on end, double salto bwd. t.</td>
      </tr>
      <tr>
        <td>652</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>C</td>
        <td>33</td>
        <td>Double salto bwd. t.</td>
      </tr>
      <tr>
        <td>653</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>C</td>
        <td>45</td>
        <td>From hang on end, dbl. salto bwd. piked.</td>
      </tr>
      <tr>
        <td>654</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>D</td>
        <td>28</td>
        <td>High wende and salto bwd t.or p.(Roethlisberger)</td>
      </tr>
      <tr>
        <td>655</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>D</td>
        <td>34</td>
        <td>Double salto bwd. pike.</td>
      </tr>
      <tr>
        <td>656</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>D</td>
        <td>40</td>
        <td>Double salto bwd. t. with ½ t. or salto bwd. ½ t. to salto fwd. tucked.</td>
      </tr>
      <tr>
        <td>657</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>D</td>
        <td>46</td>
        <td>From hang on end, dbl. salto bwd. t. with 1/1 or ½</td>
      </tr>
      <tr>
        <td>658</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>G</td>
        <td>36</td>
        <td>(Hiroyuki Kato)Double salto bwd. t. with 1/1 t.</td>
      </tr>
      <tr>
        <td>659</td>
        <td>Parallel Bars</td>
        <td>4</td>
        <td>F</td>
        <td>48</td>
        <td>From hang on end, dbl. salto bwd. t. with 2/1 t.</td>
      </tr>
      <tr>
        <td>660</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>A</td>
        <td>1</td>
        <td>Back uprise to handstand.</td>
      </tr>
      <tr>
        <td>661</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>A</td>
        <td>7</td>
        <td>Back uprise to handstand with ½ turn.</td>
      </tr>
      <tr>
        <td>662</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>A</td>
        <td>13</td>
        <td>Giant swing fwd.</td>
      </tr>
      <tr>
        <td>663</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>A</td>
        <td>19</td>
        <td>Giant swing fwd. with ½ t. thr. hdst.</td>
      </tr>
      <tr>
        <td>664</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>B</td>
        <td>2</td>
        <td>Back uprise to hdst. with 1/1 turn also to mixt.</td>
      </tr>
      <tr>
        <td>665</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>B</td>
        <td>8</td>
        <td>Swing bwd. and pirouette to hang.</td>
      </tr>
      <tr>
        <td>666</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>B</td>
        <td>14</td>
        <td>Giant swing fwd. with 1/1 turn in mixt grip.</td>
      </tr>
      <tr>
        <td>667</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>B</td>
        <td>20</td>
        <td>Flying giant swing fwd. or with½ turn.</td>
      </tr>
      <tr>
        <td>668</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>C</td>
        <td>9</td>
        <td>Swing bwd. and pirouette to support.</td>
      </tr>
      <tr>
        <td>669</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>C</td>
        <td>15</td>
        <td>Giant swing fwd. with 1/1 turn in double elgrip.</td>
      </tr>
      <tr>
        <td>670</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>C</td>
        <td>21</td>
        <td>Flying giant swing fwd. with 1/1 t.</td>
      </tr>
      <tr>
        <td>671</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>A</td>
        <td>31</td>
        <td>Giant swing bwd.</td>
      </tr>
      <tr>
        <td>672</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>A</td>
        <td>37</td>
        <td>Giant swing bwd. with ½ turn.</td>
      </tr>
      <tr>
        <td>673</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>A</td>
        <td>43</td>
        <td>Giant swing bwd. with hop to undergrip.</td>
      </tr>
      <tr>
        <td>674</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>B</td>
        <td>26</td>
        <td>Giant swing fwd. with one arm in ungr. (360°).</td>
      </tr>
      <tr>
        <td>675</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>B</td>
        <td>32</td>
        <td>One arm giant swing bwd. (360</td>
      </tr>
      <tr>
        <td>676</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>B</td>
        <td>44</td>
        <td>Flying giant swing bwd.</td>
      </tr>
      <tr>
        <td>677</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>C</td>
        <td>27</td>
        <td>(Zou Li Min)</td>
      </tr>
      <tr>
        <td>678</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>C</td>
        <td>45</td>
        <td>Flying giant swing bwd. with 1/1 t. (Quast)</td>
      </tr>
      <tr>
        <td>679</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>D</td>
        <td>46</td>
        <td>Flying giant swing bwd. with 2/1 t.</td>
      </tr>
      <tr>
        <td>680</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>B</td>
        <td>50</td>
        <td>Giant swing bwd. with hop ½ t. to el-grip.</td>
      </tr>
      <tr>
        <td>681</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>B</td>
        <td>56</td>
        <td>Giant swing bwd. with ½ t. to el-grip.</td>
      </tr>
      <tr>
        <td>682</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>B</td>
        <td>62</td>
        <td>Long swing fwd. with hop to el-grip.</td>
      </tr>
      <tr>
        <td>683</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>B</td>
        <td>68</td>
        <td>El-grip giant swing.</td>
      </tr>
      <tr>
        <td>684</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>C</td>
        <td>51</td>
        <td>Giant swing bwd. with hop 3/2 t. to undergrip, mixed el-grip.</td>
      </tr>
      <tr>
        <td>685</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>C</td>
        <td>69</td>
        <td>Giant swing rearways fwd. (Russian giant).</td>
      </tr>
      <tr>
        <td>686</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>D</td>
        <td>52</td>
        <td>(Rybalko)Giant swing bwd. with hop 3/2 t. to double el- grip.</td>
      </tr>
      <tr>
        <td>687</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>D</td>
        <td>70</td>
        <td>Giant swing rw. bwd. (Czech giant swing).</td>
      </tr>
      <tr>
        <td>688</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>A</td>
        <td>73</td>
        <td>Giant swing bwd. with inlocation during swing and dislocate to hdst.</td>
      </tr>
      <tr>
        <td>689</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>B</td>
        <td>74</td>
        <td>Steineman uprise w. ½ t. to support.(Ono)</td>
      </tr>
      <tr>
        <td>690</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>C</td>
        <td>75</td>
        <td>Elgrip giant swg. with 1/1 t. thr. hdst. in mx. gr.</td>
      </tr>
      <tr>
        <td>691</td>
        <td>Horizontal Bar</td>
        <td>1</td>
        <td>D</td>
        <td>76</td>
        <td>Giant swing rw. bwd. (Czech giant swing) with ½ turn to fwd giant swing.</td>
      </tr>
      <tr>
        <td>692</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>B</td>
        <td>2</td>
        <td>Back uprise and straddle over to hang rw.</td>
      </tr>
      <tr>
        <td>693</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>B</td>
        <td>20</td>
        <td>Back uprise and piked vault with ½ t. to hang.(Voronin)</td>
      </tr>
      <tr>
        <td>694</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>C</td>
        <td>3</td>
        <td>Back uprise and strad. hecht with ½ t. to hang(Markelov)</td>
      </tr>
      <tr>
        <td>695</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>C</td>
        <td>9</td>
        <td>Swing fwd. and vault bwd. strad. or piked to hang.(Tkatchev)</td>
      </tr>
      <tr>
        <td>696</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>D</td>
        <td>4</td>
        <td>Markelov stretched with legs together.(Yamawaki)</td>
      </tr>
      <tr>
        <td>697</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>D</td>
        <td>10</td>
        <td>Tkatchev stretched.</td>
      </tr>
      <tr>
        <td>698</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>D</td>
        <td>16</td>
        <td>Tkatchev straddled with ½ t. to mix el-grip into back uprise to hdst.(Lynch)</td>
      </tr>
      <tr>
        <td>699</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>D</td>
        <td>22</td>
        <td>Stalder, stoop circle or free hip circle bwd to Tkatchev straddle.(Piatti)</td>
      </tr>
      <tr>
        <td>700</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>E</td>
        <td>11</td>
        <td>Tkatchev stretched with ½ t. to mix el-grip into back uprise to hdst.(Moznik)</td>
      </tr>
      <tr>
        <td>701</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>E</td>
        <td>17</td>
        <td>Tkatchev straddled ½ t. to double elgrip.(Kulesza)</td>
      </tr>
      <tr>
        <td>702</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>E</td>
        <td>23</td>
        <td>Piatti stretched.</td>
      </tr>
      <tr>
        <td>703</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>F</td>
        <td>6</td>
        <td>Back uprise and hecht stretched with 3/2 t. to hang.(Walstrom)</td>
      </tr>
      <tr>
        <td>704</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>F</td>
        <td>12</td>
        <td>Tkatchev stretched with 1/1 t.(Liukin)</td>
      </tr>
      <tr>
        <td>705</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>F</td>
        <td>24</td>
        <td>Piatti stretched with ½ t. to mix el-grip into back uprise to hdst.(Kierzkowski)</td>
      </tr>
      <tr>
        <td>706</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>B</td>
        <td>26</td>
        <td>Back uprise and rear vault with ¼ t. to hang.</td>
      </tr>
      <tr>
        <td>707</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>C</td>
        <td>33</td>
        <td>Swing bwd. and salto fwd. t., p. or strad. to hg. also from el-grip.(Jäger)</td>
      </tr>
      <tr>
        <td>708</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>D</td>
        <td>28</td>
        <td>Piatti piked.</td>
      </tr>
      <tr>
        <td>709</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>D</td>
        <td>34</td>
        <td>Salto fwd. stretched, also from el-grip.(Balabanov)</td>
      </tr>
      <tr>
        <td>710</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>D</td>
        <td>46</td>
        <td>Swing fwd. and counter salto fwd. strad. to hg.(Xiao Ruizhi)</td>
      </tr>
      <tr>
        <td>711</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>E</td>
        <td>29</td>
        <td>Piatti with ½ t. to mix el-grip into back up. to hdst.</td>
      </tr>
      <tr>
        <td>712</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>E</td>
        <td>47</td>
        <td>Yamawaki ½ t. stretched to mixed grip into back uprise to hdst.(Muñoz - Pozzo)</td>
      </tr>
      <tr>
        <td>713</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>G</td>
        <td>30</td>
        <td>(Suarez)</td>
      </tr>
      <tr>
        <td>714</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>F</td>
        <td>36</td>
        <td>Salto fwd. stretched with 1/1 t. also from el grip.(Winkler - Pogorelev)</td>
      </tr>
      <tr>
        <td>715</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>G</td>
        <td>42</td>
        <td>Salto fwd. stretched with 2/1 t. also from el grip.</td>
      </tr>
      <tr>
        <td>716</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>C</td>
        <td>57</td>
        <td>Czech giant and vault bwd. strad. to hang.</td>
      </tr>
      <tr>
        <td>717</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>C</td>
        <td>63</td>
        <td>Swing fwd. and salto bwd. strad. w. ½ t. to hg.(Deltchev)</td>
      </tr>
      <tr>
        <td>718</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>C</td>
        <td>69</td>
        <td>Swing fwd. and salto bwd. piked w. ½ t. to hang.</td>
      </tr>
      <tr>
        <td>719</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>D</td>
        <td>52</td>
        <td>(Gaylord) Salto fwd, tuck or strad. over the bar, also from el-grip.</td>
      </tr>
      <tr>
        <td>720</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>E</td>
        <td>59</td>
        <td>Gaylord piked.</td>
      </tr>
      <tr>
        <td>721</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>F</td>
        <td>54</td>
        <td>Gaylord with ½ t.(Pegan)</td>
      </tr>
      <tr>
        <td>722</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>G</td>
        <td>60</td>
        <td>Pegan Pike.(Maras)</td>
      </tr>
      <tr>
        <td>723</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>G</td>
        <td>66</td>
        <td>Kovacs stretched or piked with 1/1 turn.(Cassina)</td>
      </tr>
      <tr>
        <td>724</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>F</td>
        <td>72</td>
        <td>Swing fwd. and salto bwd. w. 3/2 t. to hang.(Deff)</td>
      </tr>
      <tr>
        <td>725</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>C</td>
        <td>75</td>
        <td>Stalder ½ t. to rear vault with ¼ t. to hang.(Jansen)</td>
      </tr>
      <tr>
        <td>726</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>D</td>
        <td>76</td>
        <td>Salto bwd. ½ t.tucked over the bar.</td>
      </tr>
      <tr>
        <td>727</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>D</td>
        <td>82</td>
        <td>(Kovacs)Double salto bwd. t. over the bar.</td>
      </tr>
      <tr>
        <td>728</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>E</td>
        <td>77</td>
        <td>(Gaylord 2)Salto bwd. ½ t.piked over the bar.</td>
      </tr>
      <tr>
        <td>729</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>E</td>
        <td>83</td>
        <td>Kovacs piked or stretched.</td>
      </tr>
      <tr>
        <td>730</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>E</td>
        <td>89</td>
        <td>Kovacs with 1/1 t.(Kolman)</td>
      </tr>
      <tr>
        <td>731</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>H</td>
        <td>84</td>
        <td>Kovacs with 2/1 t.(Bretschneider)</td>
      </tr>
      <tr>
        <td>732</td>
        <td>Horizontal Bar</td>
        <td>2</td>
        <td>G</td>
        <td>96</td>
        <td>Kovacs with 3/2 t. to mix grip.(Shaham)</td>
      </tr>
      <tr>
        <td>733</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>A</td>
        <td>1</td>
        <td>Kip to hdst. or from mixed grip to hdst w. ½ t.</td>
      </tr>
      <tr>
        <td>734</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>A</td>
        <td>13</td>
        <td>From hang or from support, free hip circle through handstand.</td>
      </tr>
      <tr>
        <td>735</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>A</td>
        <td>19</td>
        <td>From hang or from support, free hip circle through handstand with ½ turn.</td>
      </tr>
      <tr>
        <td>736</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>B</td>
        <td>2</td>
        <td>Kip to hdst. in under or mixed grip w. 1/1 t. to mixed grip.</td>
      </tr>
      <tr>
        <td>737</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>B</td>
        <td>8</td>
        <td>(Weiler)From hdst., free hip circle fwd. thr. hdst.</td>
      </tr>
      <tr>
        <td>738</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>B</td>
        <td>14</td>
        <td>tourWeiler with ½ turn. giro</td>
      </tr>
      <tr>
        <td>739</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>B</td>
        <td>20</td>
        <td>From hang or from support, free hip circle-through handstand with ½ turn to el grip.</td>
      </tr>
      <tr>
        <td>740</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>C</td>
        <td>3</td>
        <td>Kip to hdst. in under or mixed grip w. 1/1 t. to el-grip.</td>
      </tr>
      <tr>
        <td>741</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>C</td>
        <td>9</td>
        <td>Weiler with 1/1 turn to mixed - grip.</td>
      </tr>
      <tr>
        <td>742</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>D</td>
        <td>10</td>
        <td>Weiler with 1/1 turn to double el - grip.</td>
      </tr>
      <tr>
        <td>743</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>A</td>
        <td>25</td>
        <td>From hang or from support, free hip circle hop to handstand.</td>
      </tr>
      <tr>
        <td>744</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>B</td>
        <td>32</td>
        <td>(Endo)Free circle fwd. straddled or legs together thr. hdst.</td>
      </tr>
      <tr>
        <td>745</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>B</td>
        <td>38</td>
        <td>Endo with ½ t. thr. hdst.</td>
      </tr>
      <tr>
        <td>746</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>B</td>
        <td>44</td>
        <td>(Stalder)Free circle bwd. straddle or legs together thr. hdst.</td>
      </tr>
      <tr>
        <td>747</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>C</td>
        <td>27</td>
        <td>From hang or from support, free hip circle hop through handstand with 1/1 turn</td>
      </tr>
      <tr>
        <td>748</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>C</td>
        <td>39</td>
        <td>Endo. with 1/1 t. thr. hdst. in mixt grip.</td>
      </tr>
      <tr>
        <td>749</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>C</td>
        <td>45</td>
        <td>Stalder with hop 1/1 t. through hdst.</td>
      </tr>
      <tr>
        <td>750</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>D</td>
        <td>40</td>
        <td>Endo with 1/1 t. thr. hdst. in el-grip.</td>
      </tr>
      <tr>
        <td>751</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>D</td>
        <td>46</td>
        <td>Stalder with hop 3/2 turn through hdst. in mix el-grip.</td>
      </tr>
      <tr>
        <td>752</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>E</td>
        <td>47</td>
        <td>Stalder with hop 3/2 turn through hdst. in el-grip.</td>
      </tr>
      <tr>
        <td>753</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>B</td>
        <td>50</td>
        <td>Stalder with ½ turn through hdst.</td>
      </tr>
      <tr>
        <td>754</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>B</td>
        <td>56</td>
        <td>Stalder with hop through hdst.</td>
      </tr>
      <tr>
        <td>755</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>C</td>
        <td>51</td>
        <td>Stalder with ½ turn through hdst. in el-grip.</td>
      </tr>
      <tr>
        <td>756</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>C</td>
        <td>57</td>
        <td>Stalder with hop through hdst. in el-grip.</td>
      </tr>
      <tr>
        <td>757</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>C</td>
        <td>63</td>
        <td>Stoop circle rearward fwd. through hdst. (Adler).</td>
      </tr>
      <tr>
        <td>758</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>D</td>
        <td>64</td>
        <td>Adler with ½ t. through hdst. in ovgr.</td>
      </tr>
      <tr>
        <td>759</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>D</td>
        <td>70</td>
        <td>Adler hop to hdst. in ungr. or ovgr. or mixed grip.</td>
      </tr>
      <tr>
        <td>760</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>E</td>
        <td>65</td>
        <td>(Fuentes)Adler and 1/1 t. through hdst. in ungr.</td>
      </tr>
      <tr>
        <td>761</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>A</td>
        <td>79</td>
        <td>Back toss to dorsal hang.</td>
      </tr>
      <tr>
        <td>762</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>B</td>
        <td>80</td>
        <td>From dorsal hang, uprise fwd. to support rw.(Steineman)</td>
      </tr>
      <tr>
        <td>763</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>B</td>
        <td>92</td>
        <td>Steineman uprise w. flank bwd. to sup</td>
      </tr>
      <tr>
        <td>764</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>C</td>
        <td>81</td>
        <td>Stoop in and free back toss to dorsal hang.</td>
      </tr>
      <tr>
        <td>765</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>C</td>
        <td>87</td>
        <td>Steineman uprise w. stoop or to hdst.(Koste)</td>
      </tr>
      <tr>
        <td>766</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>C</td>
        <td>93</td>
        <td>Endo in el-grip thr. hdst.</td>
      </tr>
      <tr>
        <td>767</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>D</td>
        <td>76</td>
        <td>Adler and 1/1 t. thr. hdst. in mixed grip, also with hop.</td>
      </tr>
      <tr>
        <td>768</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>D</td>
        <td>94</td>
        <td>Endo in el-grip and 1/1 t. to mixed grip or under-grip.</td>
      </tr>
      <tr>
        <td>769</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>A</td>
        <td>103</td>
        <td>Stoop circle fwd. to straddle cut to hang or sup.</td>
      </tr>
      <tr>
        <td>770</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>B</td>
        <td>104</td>
        <td>Stoop circle fwd. to straddle cut through hdst.</td>
      </tr>
      <tr>
        <td>771</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>C</td>
        <td>105</td>
        <td>Stoop circle fwd. to straddle cut with ½ t. (Carballo)</td>
      </tr>
      <tr>
        <td>772</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>D</td>
        <td>100</td>
        <td>Koste ½ turn to elgrip. Koste con ½ giro a cubital.(Likhovitskiy)</td>
      </tr>
      <tr>
        <td>773</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>D</td>
        <td>106</td>
        <td>Carballo with ½ turn to mixed el-grip.(Quintero)</td>
      </tr>
      <tr>
        <td>774</td>
        <td>Horizontal Bar</td>
        <td>3</td>
        <td>E</td>
        <td>107</td>
        <td>Quintero to el-grip.</td>
      </tr>
      <tr>
        <td>775</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>A</td>
        <td>1</td>
        <td>Salto fwd. piked or stretched, also with ½ t.</td>
      </tr>
      <tr>
        <td>776</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>B</td>
        <td>2</td>
        <td>Salto fwd. str. with 1/1 or 3/2 t.</td>
      </tr>
      <tr>
        <td>777</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>C</td>
        <td>3</td>
        <td>Salto fwd. str. with 2/1 or 5/2 t.</td>
      </tr>
      <tr>
        <td>778</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>C</td>
        <td>9</td>
        <td>Double salto fwd. t. or p.or with</td>
      </tr>
      <tr>
        <td>779</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>C</td>
        <td>21</td>
        <td>Double salto fwd. t. or p. or with ½ turn over the bar.</td>
      </tr>
      <tr>
        <td>780</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>D</td>
        <td>10</td>
        <td>Double salto fwd. t. or p. with 1/1 or 3/2 t.</td>
      </tr>
      <tr>
        <td>781</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>D</td>
        <td>16</td>
        <td>Double salto fwd. str. or with</td>
      </tr>
      <tr>
        <td>782</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>D</td>
        <td>22</td>
        <td>Dbl. salto fwd. t. or p. w. 1/1 or 3/2 t. over the bar.</td>
      </tr>
      <tr>
        <td>783</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>E</td>
        <td>11</td>
        <td>Double salto fwd. t. or p. with 2/1 or 5/2 t.</td>
      </tr>
      <tr>
        <td>784</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>E</td>
        <td>17</td>
        <td>Double salto fwd. str. with 1/1 or 3/2 t.</td>
      </tr>
      <tr>
        <td>785</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>G</td>
        <td>6</td>
        <td>Triple salto fwd. t. (Rumbutis)</td>
      </tr>
      <tr>
        <td>786</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>A</td>
        <td>25</td>
        <td>Salto bwd. piked or str. also with ½ or 1/1 t.</td>
      </tr>
      <tr>
        <td>787</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>B</td>
        <td>26</td>
        <td>Salto bwd. str. with 3/2 or 2/1 t.</td>
      </tr>
      <tr>
        <td>788</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>B</td>
        <td>32</td>
        <td>Double salto bwd. tuck or pike.</td>
      </tr>
      <tr>
        <td>789</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>C</td>
        <td>27</td>
        <td>Salto bwd. str. with 5/2 or 3/1 t.</td>
      </tr>
      <tr>
        <td>790</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>C</td>
        <td>33</td>
        <td>Double salto bwd. t. or pike with 1/1 t.(Tsukahara)</td>
      </tr>
      <tr>
        <td>791</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>C</td>
        <td>39</td>
        <td>Double salto bwd. str.</td>
      </tr>
      <tr>
        <td>792</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>D</td>
        <td>34</td>
        <td>Double salto bwd. t. or p. with 2/1 t.</td>
      </tr>
      <tr>
        <td>793</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>D</td>
        <td>40</td>
        <td>Double salto bwd. str. with 1/1 t.</td>
      </tr>
      <tr>
        <td>794</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>E</td>
        <td>41</td>
        <td>Double salto bwd. str. with 2/1 t.(Watanabe)</td>
      </tr>
      <tr>
        <td>795</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>F</td>
        <td>42</td>
        <td>(Fedorchenko)Double salto bwd. str. with 3/1 t.</td>
      </tr>
      <tr>
        <td>796</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>F</td>
        <td>48</td>
        <td>(Andrianov)(Hoffmann)Triple salto bwd. t. or over the bar.</td>
      </tr>
      <tr>
        <td>797</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>A</td>
        <td>61</td>
        <td>Hecht strad., hecht or hecht w. ½ t.</td>
      </tr>
      <tr>
        <td>798</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>B</td>
        <td>50</td>
        <td>Double salto bwd. t. or p. over the bar.</td>
      </tr>
      <tr>
        <td>799</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>B</td>
        <td>62</td>
        <td>Hecht w. 1/1 or 3/2 t.</td>
      </tr>
      <tr>
        <td>800</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>C</td>
        <td>51</td>
        <td>Dbl. salto bwd. t. or p. with 1/1 t. over the bar.</td>
      </tr>
      <tr>
        <td>801</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>C</td>
        <td>57</td>
        <td>Double salto bwd. str over the bar.</td>
      </tr>
      <tr>
        <td>802</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>D</td>
        <td>52</td>
        <td>Double salto bwd. t. or p. with 2/1 t. over the bar</td>
      </tr>
      <tr>
        <td>803</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>D</td>
        <td>58</td>
        <td>Double salto bwd. str. w. 1/1 t. over the bar.(Hayden)</td>
      </tr>
      <tr>
        <td>804</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>D</td>
        <td>64</td>
        <td>Hecht w. 2/1 t.</td>
      </tr>
      <tr>
        <td>805</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>G</td>
        <td>54</td>
        <td>Triple salto bwd. p.(Fardan)</td>
      </tr>
      <tr>
        <td>806</td>
        <td>Horizontal Bar</td>
        <td>4</td>
        <td>G</td>
        <td>60</td>
        <td>Triple salto bwd. t. with 1/1 t.(Belle)</td>
      </tr>
    </tbody>
  </table>
)


export default () => (
  <div>
    <br />
    <h1>MAG 2020</h1>
    <MagCode />
  </div>
)
