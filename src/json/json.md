#### json值类型：
- 对象（{}）、数组（[]）、字符串（"string"）、数字（如 42 或 3.14）、布尔值（true 或 false）、null（表示空值）
- 自定义配皮json的正则：egex = /\s*(?:"([^"]*)"|(\d+)|true|false|null|NaN|Infinity|-Infinity|(\[.*?\])|({[^{}]*}))/g;
- 比较全面的测试用例：const jsonString = '{"a":123,"b":[1,2,3],"c":{"nested1":456,"2":"text"},"d":true,"e":null,"f":"NaN","g":"Infinity","h":"-Infinity","1":[{"a":1},"b"]},"i":false';
- 虽然上面的这个jsonString测试能通过，但是不好写jest（这个问题还是的修复）
#### 关于jsonToMap
- 只能正确处理json对象，所以需要提前判断。方法中就不做判断了；避免jsonToArray参与,职责过于复杂
#### 关于jsonToArray
- 只能正确处理json数组，所以需要提前判断。方法中就不做判断了；避免jsonToMap参与，职责过于复杂