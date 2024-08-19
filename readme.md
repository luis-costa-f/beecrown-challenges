# Basic Tutorial: Setting Up a Python Virtual Environment

This guide explains how to create a Python virtual environment, activate it, and install project dependencies listed in `requirements.txt`.

## Step 1: Create the Virtual Environment

1. **Create the virtual environment**:
    ```bash
    python -m venv venv
    ```

2. **source venv/bin/activate**:
    ```bash
    source venv/bin/activate
    ```

3. **Install Dependencies**:
    ```bash 
        deactivate
    ```

instalar o golang

baixar a versão mais atual:
```
    wget https://go.dev/dl/go1.20.5.linux-amd64.tar.gz
```

Extrair os arquivos
```
    sudo tar -C /usr/local -xzf go1.20.5.linux-amd64.tar.gz
```

configurar como variavel de ambiente
```
    nano ~/.profile
```

Adicione as seguintes linhas ao final do arquivo:

```
    export PATH=$PATH:/usr/local/go/bin
```

Atualize o terminal
```
    source ~/.profile
```

para testar execute 
```
    go version
```


execute arquivos golang com 

```
    go run file_name.go
```

