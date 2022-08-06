import { useState, useEffect } from "react";
// Hooks : useState, useEffect
function App() {
  // useState Definition
  const [number, setNumber] = useState(0);
  const [name,setName] = useState('Mehmet');

  // useEffect Definition
  // Her butona basıldığında ve varsayılan değer ataması yapıldığında çalışır.
  useEffect(() => {
    console.log('State Güncellendi!');
  })

  // Component in DOM a Mount edildiği anı yakalamak - Dependency Array
  useEffect(() => {
    console.log('Component Mount Edildi!');
  },[])

  // Sadece number güncellendiğinde bundan haberdar olmak istersem -- dependency array içine hangi state dinlemek/ onun değişimlerini yakalamak istersem onu vermem gerekiyor.
  useEffect(() => {
    console.log('number state Güncellendi!');
  },[number])

  // Varyasyonlar
  // hem number hem name state ini dinlemek
  useEffect(() => {
    console.log('name veya number state Güncellendi!');
  },[number, name])

  // Varyasyonlar
  // Bir kez güncellenir bir defa isim değişiyor bitiyor. number da her defasında artırma olduğundan her butona basıldığında güncellenir.
  useEffect(() => {
    console.log('name state Güncellendi!');
  },[name])



  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Tıkla</button>

      <hr />

      <h1>{name}</h1>
      <button onClick={() => setName("Mete")}>Tıkla</button>
    </div>
  );
}

export default App;

/** 1
 * Her butona bastığımda number değeri güncellenir.
 * Her butona bastığımda state güncellenir.
 * Her butona bastığımda number state i güncellenir.
 * Dolayısıyla her butona bastığımda bu component render edilir.
 * Güncelleme -- Render
 */

/** 2
 * Güncellenme hali bir eventtir.
 * State(number) in güncellenme halini yakalamak için useEffect Hook u kullanılır.
 * Yaşam döngüsündeki bu event leri yakalamak için useEffect kullanılır.
 */
/** 3
 * Component üzerindeki herhangi bir state güncellendiği anda aşağıdaki ifadeyle o durumu yakalayabilirim.
 * useEffect(() => {
    console.log('State Güncellendi!');
  })

 */
/** 4
 * componentDidMount
 * React in daha önceki versiyonlarında class component ler kullanılıyordu. Buradaki özel tanımlı fonksiyonun adı "componentDidMount" tur.
 * Component DOM a mount olduğu anı yakalayabilmemizi sağlayan bir fonksiyondur.
 * Bunu useEffect ile nasıl yapacağımıza bakacağız.
 */
/** 5 - Hook Kullanım Kuralları
 * useEffect, useState gibi hook ları kullanırken bunlar hiçbir şekilde -if- yapısının içinde olmamalıdır.
 * Component tepesinde bulunmalıdır.
 * Herhangi bir kontrole tabi olmamalıdır.
 */
/** 6 - Dependency array
 * Arrow func. yazıldıktan sonra ikinci parametrede ',[]' array açıp kapatma yapmamız gerekir.
 * [] -> teknik olarak -dependency array- olarak isimlendirilir.
 * Eğer bunu boş bırakırsak anlamı: component mount edildiği anı yakalarsın demek oluyor.
 */

/** 7
 * Butona tıklayıp state güncellendiğinde sadece aşağıdaki çalışır
 * useEffect(() => {
    console.log('State Güncellendi!');
  })

  Diğer useEffect çalışmaz.
 */
/** 8
 * Dependency array içine istediğimiz kadar state elemanı ekleyebiliriz.
 * name state bir kere güncellenir zaten isim olduğundan. Numara artırma her defasında güncellenir.
 */