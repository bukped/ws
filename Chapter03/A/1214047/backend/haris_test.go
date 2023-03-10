package haris

import (
	"testing"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

func TestInsertUser(t *testing.T) {
	dbname := "suratdb"
	user := User{
		ID:      primitive.NewObjectID(),
		Nama:    "Haris Riyoni",
		Email:   "harisriyoni@gmail.com",
		Telepon: "081234567890",
	}
	insertedID := InsertUser(dbname, user)
	if insertedID == nil {
		t.Error("Failed to insert user")
	}
}

func TestInsertSurat(t *testing.T) {
	dbname := "suratdb"
	surat := Surat{
		ID:       primitive.NewObjectID(),
		Isisurat: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem!",
		Subject:  "Surat Pekerjaan",
	}
	insertedID := InsertSurat(dbname, surat)
	if insertedID == nil {
		t.Error("Failed to insert surat")
	}
}

func TestInsertKategori(t *testing.T) {
	dbname := "suratdb"
	surat := Surat{
		ID:       primitive.NewObjectID(),
		Isisurat: "Ini isi surat terserah bebas mau ngisi apa ya gesya",
		Subject:  "Pengumpulan data diri kepada perusahaan haris.com",
	}
	kategori := Kategori{
		ID:           primitive.NewObjectID(),
		NamaKategori: "Kategori pekerjaan",
		Surat:        []Surat{surat},
	}
	insertedID := InsertKategori(dbname, kategori)
	if insertedID == nil {
		t.Error("Failed to insert kategori")
	}
}

func TestInsertLokasi(t *testing.T) {
	dbname := "suratdb"
	lokasi := Lokasi{
		ID:     primitive.NewObjectID(),
		Region: "Jakarta",
	}
	insertedID := InsertLokasi(dbname, lokasi)
	if insertedID == nil {
		t.Error("Failed to insert lokasi")
	}
}

func TestInsertAbout(t *testing.T) {
	dbname := "suratdb"
	about := About{
		ID:       primitive.NewObjectID(),
		Isi_satu: "Ini isi satu",
		Isi_dua:  "Ini isi dua",
		Image:    "image.jpg",
	}
	insertedID := InsertAbout(dbname, about)
	if insertedID == nil {
		t.Error("Failed to insert about")
	}
}
