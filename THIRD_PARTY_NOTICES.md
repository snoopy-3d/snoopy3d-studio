# Открытые компоненты

SNOOPY3D Studio использует следующие отдельно лицензированные компоненты:

| Компонент | Версия | Лицензия / источник |
|---|---|---|
| Three.js | 0.180.0 | MIT — https://github.com/mrdoob/three.js |
| Manifold | 3.3.2 | Apache-2.0 — https://github.com/elalish/manifold |
| fflate | 0.8.2 | MIT — https://github.com/101arrowz/fflate |
| opentype.js | 1.3.4 | MIT — https://github.com/opentypejs/opentype.js |
| qrcode | 1.5.4 | MIT — https://github.com/soldair/node-qrcode |
| jsQR | 1.4.0 | Apache-2.0 — https://github.com/cozmo/jsQR |
| Noto Sans / Serif / Sans Mono Regular | bundled | SIL Open Font License 1.1 — https://github.com/notofonts/noto-fonts ; текст в fonts/OFL.txt |
| Vite (сборка) | 6.1.0 | MIT — https://github.com/vitejs/vite |

Высоты: Mapzen/AWS Terrain Tiles, SRTM и другие открытые DEM. Формат и атрибуция источников: https://github.com/tilezen/joerd . Запросы высот выполняются только по явной кнопке пользователя. Закрытый код 3dprintpricing.pro не включён.

Механические координаты плат Uno Rev3, Nano и Mega 2560 сверены с официальными CAD-файлами Arduino (Arduino, CC BY-SA 4.0): https://docs.arduino.cc/hardware/uno-rev3/ , https://docs.arduino.cc/hardware/nano/ , https://docs.arduino.cc/hardware/mega-2560/ . PCB/CAD-файлы и схемотехника не распространяются в составе сайта; `board-data.js` содержит числовые размеры и координаты креплений.
