# R'lyeh hacklab

Sitio principal del hacklab. Publicado en https://rlab.be


## Cómo usar el sitio

* Instalar jekyll: https://jekyllrb.com/docs/installation/

* Buildear la aplicación

```
$ bundle install
```

* Correr jekyll en modo servidor

```
$ jekyll serve
```

o en caso de error `Prepending `bundle exec` to your command may solve this.` ejecutar como:
`RUBYOPT='-W0' bundle exec jekyll serve`

*Si por algún motivo al instalar jekyll no lo podés ejecutar (`command not found: jekyll`) asegurate de tener bien definido tu `$PATH`. Para ver la ubicación de donde se instaló jekyll podés hacer `sudo updatedb && locate jekyll`.*

## Si no tenés ruby/jekyll
jekyll install: https://jekyllrb.com/docs/installation/
### En arch
```
sudo pacman -S ruby base-devel
gem install jekyll bundler
```

Para desinstalar completamente
```
sudo pacman -Rsn ruby
rm -rf ~/.gem ~/gems
```
