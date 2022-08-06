### useEffect Hook
useEffect kullanarak React componentleri üzerindeki yaşam döngülerine giriş yaptık.
Componentler DOM a Mount olduğu anda,
Component üzerindeki bir state değiştiği anda, 
Aldığı bir prop değiştiği anda veya
Unmount olduğu anda (yani DOM dan kaldırıldığı anda )
bu durumları yakalayıp o durumlara göre birtakım işlemler yaptırabiliyoruz.

``` Dependecy array - Mount edildiği an

useEffect(() => {
    console.log('Component Mount Edildi!');
  },[])

```
- componentDidMount - class component vs useEffect - function component
- Component in DOM a Mount olduğu anı yakalamak
- Hook Kullanım Kuralları
- Dependency array - component dom a mount edildiği anı yakalamak
- State güncellendiği anı yakalamak
- State in güncellenmesi kaç kez çalıştı(her tıklandığında) vs. component dom a mount edildiği an(bir defa başlarken mount edilir.)
- name bir defa Mete olarak güncellenir. Başka render edilmez.
- number her defasında artacağından sürekli render edilir.
- specific bir state in güncellendiğinden haberdar olmak

```
useEffect(() => {
    console.log('name state güncellendi!');
  },[name])
```

- Tüm state ler güncellenmesinden haberdar olmak
```
useEffect(() => {
    console.log('State Güncellendi!');
  })
```