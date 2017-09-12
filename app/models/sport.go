package models

import (
	"github.com/jinzhu/gorm"
	"github.com/qor/l10n"
	"github.com/qor/slug"
)

type Sport struct {
	gorm.Model
	l10n.LocaleCreatable

	Title         string    `valid:"required"`
	TitleWithSlug slug.Slug `valid:"required"`

	Products []Product
}
