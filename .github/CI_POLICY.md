# CI çalışma politikası

Olta Atlası için kod ve içerik değişiklikleri doğrudan `main` dalına yazılmak yerine çalışma dalı → pull request → squash merge akışından geçirilir. Bu yöntem GitHub Actions `pull_request` ve `push` tetikleyicilerinin güvenilir biçimde çalışmasını sağlar ve `Quality check`, `Quality gate` ile production deploy hattının gerçek merge SHA üzerinde koşmasını garanti eder.

Doğrudan Contents API ile `main` dalına yazılan commitler bazı entegrasyon bağlamlarında Actions tetikleyicisi üretmeyebildiğinden, bu yöntem kullanılmamalıdır.
