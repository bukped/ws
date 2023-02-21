# Golang Package and Environment

Disini dipelajari bagaimana membuat package dan menggunakan environment variabel di golang. Pastikan :
1. Download dan Install golang
2. Membuat dan menjalankan aplikasi hello word
   Buat file main.go yang berisi
   ```go
   package main

   import "fmt"

   func main() {
        fmt.Println("Hello, World!")
   }
   ```
   ```sh
   go mod init hello
   go mod tidy
   go run .
   ```
## Struct di golang

Komunikasi di golang menggunakan json dipermudah dengan adanya struct type. Struct type ini akan mendefinisikan bagaimana bentuk json yang berkomunikasi dari frontend menuju backend.

## Fungsi di golang

Kita akan melakukkan

## Testing Packace

```go
package autoiteung

import (
	"fmt"
	"testing"
)

func TestBukaKelas(t *testing.T) {
	nama_group := "21666-2A-PEMOGRAMAN III | TYGUSAD"
	pesaniteung := BukaKelas(nama_group)
	fmt.Println(pesaniteung)

}

```

## Publish
GOPROXY=proxy.golang.org

```sh
git tag v0.0.1
git push origin --tags
go list -m github.com/whatsauth/wasocket@v0.0.1
```
