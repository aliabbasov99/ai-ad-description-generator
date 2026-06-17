
## Ümumi məlumat

Lahiyə Suni İntellekt vasitəsi ilə Instagram postları üçün ideal və çox izlənmə gətirəcək açıqlamanı yaradır. CTA(Call To Action), hashtagları tapır. İnstagram biznes sahibləri üçün idealdır. 

Sadecə Biznes adı və məhsulunuz haqqında məlumat daxil etməyiniz kifayətdir.

![alt text](https://i.imgur.com/J1kSlms.png "Numune resim")

Frontend üçün: React, MateriaUI, Redux \n
Backend üçün: Express.js -istafadə olunmuşdur.

## Quraşdırma

İlk öncə API qovluğu içərisində .env faylında ```GEMINI_API_KEY``` və backend üçün ```PORT``` təyin etməliyik. 
[GEMINI API KEY  alma üçün klikləyin(pulsuz)](https://aistudio.google.com/api-keys).

api/.env
```
PORT = <SIZIN_BACKEND_PORTUNUZ>
GEMINI_API_KEY = <SIZIN_AI_KEY>
```

Ardından frontend-də backend in adresini təyin edirik.

frontend/.env
```
VITE_BACKEND_URL=http://localhost:<SIZIN_BACKEND_PORTUNUZ>
```

Paketləri yükləyirik hər biri üçün və bu qədər artıq hazırdır.

Terminalda **/frontend** də olduqda:

```npm install```

Terminalda **/api** də olduqda:

```npm install```


## İşə salma
Çalışdırmaq üçün
Terminalda **/frontend** də olduqda:

```npm run dev```

Terminalda **/api** də olduqda:

```node index.js```
