# HTTP Method dan Struct Golang

Mempelajari method dan struct golang

```go
package main

import (
	"log"

	"github.com/gofiber/fiber/v2"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		var contoh Example
		contoh.ID = primitive.NewObjectID()
		contoh.Messages = "Hello World dari get"
		return c.JSON(contoh)
	})
	app.Post("/", func(c *fiber.Ctx) error {
		var contoh Example
		if err := c.BodyParser(&contoh); err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": err.Error()})
		}
		return c.JSON(contoh)
	})
	app.Put("/", func(c *fiber.Ctx) error {
		return c.SendString("ini dari put")
	})
	app.Patch("/", func(c *fiber.Ctx) error {
		return c.SendString("ini dari patch")
	})
	app.Delete("/", func(c *fiber.Ctx) error {
		return c.SendString("ini dari delete")
	})

	log.Fatal(app.Listen(":3000"))
}

type Example struct {
	ID       primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty" query:"id" url:"_id,omitempty" reqHeader:"token"`
	Messages string             `json:"messages" bson:"messages" query:"messages" url:"messages" reqHeader:"token"`
}
```

## Kerjakan
1. Buatlah struct sendiri, berbeda dari contoh. jumlah variabel minimal 5
2. Pakai struct tersebut di dalam app.Get Post Put Patch Delete dengan struct yang berbeda beda
3. Uji dengan Thunder Client pastikan tidak ada error

Penilaian:
1. setiap struct(maksimal 5, contoh Example, Example1, Example2 ...) = 10
2. setiap struct yang dipakai di app(get,put,post,patch,delete) = 5
3. setiap path yang berbeda = 5
